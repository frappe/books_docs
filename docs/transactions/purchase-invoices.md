# Purchase Invoices

Purchase Invoices are bills that your supplier sends you when you make a
purchase.

It is a transactional entry that denotes a purchase.

## Creating Purchase Invoices

If you have set up your Frappe Books with Accounts, Taxes, Purchase Items, and
Suppliers, creating a Purchase Invoice is as simple as it gets.

First navigate to the Purchase Invoices page

`Purchases > Purchase Invoices`

Then click on the blue `+` button to open the Purchase Invoice form.

![Purchase Invoice Form](./images/purchase-invoice.png)

1. Select the Supplier from whom you will be making a purchase.
2. Click on Add Row and select the Item being purchased. Default Tax will be
   fetched you can change it if required.
3. Enter the Quantity.
4. You can add more items or if you are done, click on Save.
5. Once finalized, click on Submit. Frappe Books will do the required ledger
   entries against the appropriate accounts.

This invoice is now in _“Submitted”_ state, it cannot be edited. The purchase
transaction has been recorded.

## Making Purchase Payments

Once a purchase invoice has been submitted, you’ll need to record payment
against it to denote that you’ve paid the money.

To make a Payment first navigate to the Purchase Invoice, then click on the
`...` menu button. Then click the Make Payment option.

![Sales Invoice Status](./images/purchase-payment.png)

This will open the Payment quick edit form with the outstanding amount
auto-filled.

![Sales Invoice Payment](./images/purchase-payment-quickedit.png)

You can change the values and click on Save. This will Save and Submit the
Payment.

On making the Payment, Frappe Books will make the necessary ledger entries to
increase the payment amount in Accounts Payable and decrease the amount in your
Bank or Cash Account.

It will also update the Outstanding Amount on the invoice form.

::: info Purchase Invoice Status
Until Payments are made to settel the Outstanding Amount, the Purchase Invoice
will be in the **Unpaid** state.

Once the Outstanding Amount reaches 0, the status will change to **Paid**.
:::

### Auto Payments

You can simplify the _Purchase Invoice → Payment_ workflow by using Auto
Payments. For this you just need to set the default accounts for Sales Payment.

This can be done in `Setup > Settings > Defaults > Auto Payments`:
![Payment Accounts](./images/payment-accounts.png)

Once this is set, whenever you Submit a Purchase Invoice a Payment entry will
automatically be created.

::: tip Disable Auto Payment for a Purchase Invoice

You can disable Auto Payment for a single Purchase Invoice by unchecking the Make
Payment On Submit check box in the Settings tab before Submitting the Purchase
Invoice entry.

![Disable Auto Payment](./images/auto-payment.png)
:::

## Creating Return (Debit Notes)

The user can create a Debit Note against the Purchase Invoice or create a Debit 
Note directly from the Purchase Invoice without mentioning reference. To know more,
visit the [Debit Note](./debit-notes) page.
