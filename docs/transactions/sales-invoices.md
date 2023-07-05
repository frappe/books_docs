# Sales Invoices

Sales Invoices are bills that are sent to your customers when an income is
booked.

It is a transactional entry that denotes a sale.

## Creating Sales Invoices

If you have set up your Frappe Books with Accounts, Taxes, Sales Items, and
Customers, creating a Sales Invoice is as simple as it gets. If not you can the
follow the steps [here](/setting-up/getting-started).

First navigate to the Sales Invoices page

`Sales > Sales Invoices`

Then click on the blue `+` button to open the Sales Invoice form.

![Sales Invoice Form](./images/sales-invoice.png)

1. Select the Customer to whom you will be making a sale.
2. Click on Add Row and select the Item being sold. Default Tax will be fetched
   you can change it if required.
3. Enter the Quantity.
4. You can add more items or if you are done, click on Save.
5. Once finalized, click on Submit. Frappe Books will do the required ledger
   entries against the appropriate accounts.

This invoice is now in _“Submitted”_ state, it cannot be edited. The sales
transaction has been recorded.

## Editing an Invoice Item

To edit the values of an Invoice Item click on the edit button on the item row
![Edit Invoice Item](./images/invoice-item.png)

From here you can change the item description, HSN code check the Taxed Amount,
etc.

::: tip Setting the Taxed Amount
You can directly set the Taxed Amount, Frappe Books will calculate the Rate of
the Item automatically.
:::

## Making Sales Payments

Once a sales invoice has been submitted, you’ll need to record payment against
it to denote that you’ve received the money.

To make a Payment first navigate to the Sales Invoice, then click on the `...`
menu button. Then click the Make Payment option.

![Sales Invoice Status](./images/sales-payment.png)

This will open the Payment quick edit form with the outstanding amount
auto-filled.

![Sales Invoice Payment](./images/sales-payment-quickedit.png)

You can change the values and click on Save. This will Save and Submit the
Payment.

On making the Payment, Frappe Books will make the necessary ledger entries to
reduce the payment amount from Accounts Receivable and increase the amount in
your Bank or Cash Account.

It will also update the Outstanding Amount on the invoice form.

::: info Sales Invoice Status
Until Payments are made to settle the Outstanding Amount, the Sales Invoice
will be in the **Unpaid** state.

Once the Outstanding Amount reaches 0, the status will change to **Paid**.
:::

### Auto Payments

You can simplify the _Sales Invoice → Payment_ workflow by using Auto Payments.
For this you just need to set the default accounts for Sales Payment.

This can be done in `Setup > Settings > Defaults > Auto Payments`:
![Payment Accounts](./images/payment-accounts.png)

Once this is set, whenever you Submit a Sales Invoice a Payment entry will
automatically be created.

::: tip Disable Auto Payment for a Sales Invoice

You can disable Auto Payment for a single Sales Invoice by unchecking the Make
Payment On Submit check box in the Settings tab before Submitting a Sales
Invoice entry.

![Disable Auto Payment](./images/auto-payment.png)
:::

## Sales Invoice Return

The customer could return an already sold Item due to quality issues or any
other reasons.

The user can create a Sales Invoice Return directly from the original Sales
Invoice document or manually from the New Sales Invoice Entry.

### Creating a Sales Invoice Return

1. Open the original Sales Invoice document, against which customer returned
   the Items.
2. Click on **Create > Return**.
   ![Create Sales Invoice Return](./images/create-sales-invoice-return.png)
3. The Party and Item details will be fetched as set in the original Sales
   Invoice document. You can set the quantity of Items returned in negative
   numbers.
   ![Sales Invoice Return Form](./images/sales-invoice-return-form.png)
4. Save and Submit.

::: info
The Item quantity and Payment amount will be in negative figures since it's
a return.
:::

### Creating Manually

1. Navigate to the Sales Invoice page `Sales > Sales Invoice`
2. Check **is Return** to mark the Sales Invoice as Return. If you want to
   reference an original Sales Invoice, click on **Return Against** then
   select the target Sales Invoice.
   ![Set Is Return](./images/sales-invoice-set-is-return.png)
3. Fill Item details.
4. Save and Submit.

## How does Sales Invoice Return affect General Ledger

The Sales Invoice Return will reverse the impact of the original Sales Invoice
in the General Ledger.
![Sales Invoice Return in General Ledger](./images/sales-invoice-return-in-general-ledger.png)

## Printing the Sales Invoice

To export the Sales Invoice as a PDF, click on the Print button next to the
`...` menu above the Sales Invoice Form.

This will open the Print View, you can click on the Customize button to
customize it.

![Print View](./images/print-view.png)

You can now add your company logo and select a brand color that matches your
business’ primary color. You can also change the style by selecting one of the
given Templates. Choose any that fits your style.

Once you have completed customizing, click on Save as PDF to save the Sales
Invoice.

After saving the PDF you can take a print out of it using your printer's
software.
