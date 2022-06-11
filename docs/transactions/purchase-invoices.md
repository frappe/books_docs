# Bills

A bill that your supplier sends you for products or services you have purchased.

### Creating Bills

When you have expenses that you don’t have to pay right away, record them by
creating a Bill in Frappe Books. Your supplier may accept the payment later,
after shipping, or you may have some other arrangement.

To access the Bill list, go to Purchases > Bills.

1. Click on the blue plus button. A New Bill form will open up.
2. Select the Supplier or create one from the dropdown.
3. Select the Item and enter the Rate and Quantity. The default Tax for that
   Item will be fetched, you can change it here if you want.
4. Click on Save. Ledger entries will be created to increase the amount in
   Accounts Payable.

<!-- ![Submitted Bill](/files/submitted-bill.png) -->

### Recording payments against Bills

When it's time to record the payment, you can open the relevant Bill from
Purchases > Bills then follow these steps.

1. Click on Menu > Make Payment.
2. Enter the Payment Method, Date and click on Save. This will now reduce the
   amount from Accounts Payable and the amount from your Bank Account will be
   updated.
