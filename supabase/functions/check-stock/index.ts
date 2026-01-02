const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SHOPIFY_DOMAIN = 'unbbam-vg.myshopify.com';
const ADMIN_ACCESS_TOKEN = Deno.env.get('SHOPIFY_ACCESS_TOKEN') || '';
const API_VERSION = '2024-10';

const VARIANT_IDS = {
  'XS': 52027347697992,
  'S': 50284783763784,
  'M': 50284783796552,
  'L': 50284783829320,
  'XL': 52027529167176,
  'XXL': 52027531198792
};

interface InventoryLevel {
  inventory_item_id: number;
  available: number;
}

interface ProductVariant {
  id: number;
  inventory_item_id: number;
  inventory_quantity: number;
  inventory_policy: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    console.log('Fetching product variants from Admin API');

    const productResponse = await fetch(
      `https://${SHOPIFY_DOMAIN}/admin/api/${API_VERSION}/products/9443005890888.json`,
      {
        headers: {
          'X-Shopify-Access-Token': ADMIN_ACCESS_TOKEN,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!productResponse.ok) {
      const errorText = await productResponse.text();
      throw new Error(`Admin API error: ${productResponse.status} ${errorText}`);
    }

    const productData = await productResponse.json();
    const variants: ProductVariant[] = productData.product.variants;

    console.log('Received variants:', variants.length);

    const stockData: Record<string, { available: boolean; inStock: boolean; quantity: number }> = {};

    Object.entries(VARIANT_IDS).forEach(([size, variantId]) => {
      const variant = variants.find(v => v.id === variantId);
      
      if (variant) {
        const quantity = variant.inventory_quantity || 0;
        const inStock = quantity > 0;
        const available = variant.inventory_policy === 'continue' || inStock;
        
        console.log(`Size ${size}: quantity=${quantity}, policy=${variant.inventory_policy}`);
        
        stockData[size] = {
          available,
          inStock,
          quantity
        };
      } else {
        stockData[size] = {
          available: false,
          inStock: false,
          quantity: 0
        };
      }
    });

    console.log('Final stock data:', stockData);

    return new Response(
      JSON.stringify({ success: true, stock: stockData }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );

  } catch (error) {
    console.error('Error checking stock:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        stock: Object.keys(VARIANT_IDS).reduce((acc, size) => {
          acc[size] = { available: true, inStock: true, quantity: 0 };
          return acc;
        }, {} as Record<string, { available: boolean; inStock: boolean; quantity: number }>)
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
});