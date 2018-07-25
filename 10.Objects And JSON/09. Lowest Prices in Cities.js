
function solve(args) {

    let products = new Map();

    for(let row of args)
    {
        let input = row.split(/[|]+/g).map(e => e.trim());

        let [town, product, price] = input;

        let townAndPrice = new Map();

        if(products.has(product))
        {
            townAndPrice = products.get(product);

            townAndPrice.set(Number(price), `(${town})`);
        }
        else
            townAndPrice.set(Number(price), `(${town})`);

        products.set(product, townAndPrice);
    }

    for(let product of products)
    {
        let productName = product[0];

        let lowestPriceAndTown = 0;

        let minPrice = 999999999999999999;

        for(let i of product[1])
        {
            if(minPrice > Number(i[0]))
                minPrice = Number(i[0]);
        }

        for(let ele of product[1])
        {
            if(Number(ele[0]) === minPrice)
            {
                lowestPriceAndTown = ele.toString().replace(',',' ');
            }
        }

        console.log(`${productName} -> ${lowestPriceAndTown}`);
    }
}

solve(['Sofia City | Audi | 100000',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);
    