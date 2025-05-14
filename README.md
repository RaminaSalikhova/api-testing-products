# API Testing - Product Data Validation

This project contains automated tests to validate product data from the Fake Store API (https://fakestoreapi.com/products).

## Test Objectives

The tests verify:
- Server response code (expected 200)
- Product attributes validation:
  - Title must not be empty
  - Price must not be negative
  - Rating must not exceed 5
- Generates a list of products containing defects

## Setup

1. Make sure you have Node.js installed on your system
2. Clone this repository
3. Install dependencies:
```bash
npm install
```

## Running Tests

To run the tests:
```bash
npm test
```

## Test Results

The test suite will:
1. Run all validation checks
2. Display test results
3. If any defective products are found, they will be listed in the console output with details about the specific issues 

![alt text](image.png)