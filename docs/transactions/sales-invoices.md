# Invoices

Invoices are bills that are sent to your customers and income is booked.

## Creating Invoices

If you have set up your system with Accounts, Taxes, Items, and Customers,
creating an Invoice is as simple as it gets. To access invoices, go to:

> Sales > Invoices

1. Click on the blue plus button. You will be greeted with a New Invoice form.
1. Select the customer and select an Item that you are selling. The default Tax
   for that Item will be fetched, you can change it here if you want.
1. Enter the Quantity.
1. You can add more items or if you are done, click on Save. This invoice is
   still in a “Draft” state, which allows any changes in the invoice. You can
   even see how it looks in Print.
1. Once you are sure of the details, click on Submit. Frappe Books will do the
   required ledger entries against the Receivable, Sales, and Tax accounts.

<!-- ![Submitted Invoice](/files/submitted-invoice.png) -->

This invoice is now in “Submitted” state, it cannot be edited. However, if you
want to make changes, you can “Revert” the invoice and it will become editable
again. When you revert an invoice, the corresponding reverse ledger entries are
done to reverse the impact of the invoice on your ledger. You can make your
changes and submit it again.

### Printing an Invoice

To take a print or PDF of this invoice, click on Menu > Print. The Print view
will show up. You can customize the look of your invoice from here. Add your
company logo and select a brand color that matches your business’ primary color.
You can also change the style of your invoice from the three formats: Basic,
Minimal and Business. Choose any that fits your style.

<!-- ![Invoice Print](/files/invoice-print.png) -->

### Recording Payments against Invoices

Once an invoice has been submitted, you’ll need to record payment against it to
denote that you’ve received the money.

1. Go to Sales > Invoices, In the invoices list, you’ll see a list of unpaid as
   well as paid invoices.
2. Find the invoice against which you want to record a payment and open it.
3. From the menu, click on Make Payment.
4. Enter the Payment Method, Date and click on Save.
5. Frappe Books will make the necessary ledger entries to reduce the payment
   amount from Accounts Receivable and increase the amount in your Bank or Cash
   Account.
