import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

describe('Product API Tests', () => {
    let products;
    let defectiveProducts = [];

    // Fetch products before running tests
    beforeAll(async () => {
        const response = await axios.get(API_URL);
        products = response.data;
    });

    test('Server should respond with status code 200', async () => {
        const response = await axios.get(API_URL);
        expect(response.status).toBe(200);
    });

    test('Response should be an array of products', () => {
        expect(Array.isArray(products)).toBe(true);
        expect(products.length).toBeGreaterThan(0);
    });

    test('Each product should have a non-empty title', () => {
        products.forEach((product, index) => {
            if (!product.title || product.title.trim() === '') {
                defectiveProducts.push({
                    id: product.id,
                    issue: 'Empty title',
                    product: product
                });
            }
            expect(product.title).toBeDefined();
            expect(product.title.trim()).not.toBe('');
        });
    });

    test('Each product should have a non-negative price', () => {
        products.forEach(product => {
            if (product.price < 0) {
                defectiveProducts.push({
                    id: product.id,
                    issue: 'Negative price',
                    product: product
                });
            }
            expect(product.price).toBeGreaterThanOrEqual(0);
        });
    });

    test('Each product rating should not exceed 5', () => {
        products.forEach(product => {
            if (product.rating && product.rating.rate > 5) {
                defectiveProducts.push({
                    id: product.id,
                    issue: 'Rating exceeds maximum',
                    product: product
                });
            }
            expect(product.rating.rate).toBeLessThanOrEqual(5);
        });
    });

    // After all tests, log defective products if any
    afterAll(() => {
        if (defectiveProducts.length > 0) {
            console.log('\nDefective Products Found:');
            console.log(JSON.stringify(defectiveProducts, null, 2));
        } else {
            console.log('\nNo defective products found.');
        }
    });
}); 