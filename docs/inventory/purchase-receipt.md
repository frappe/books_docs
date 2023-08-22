# Purchase Receipt

Purchase Receipt is an inventory transaction that records the receipt stock from a
supplier after a purchase has been made.

Purchase Receipts record inward movement of stock.

## Creating a Purchase Receipt

There are two ways to create a Purchase Receipt.

### From a Purchase Invoice

Since a receipt of stock follows a purchase, you can create a Purchase Receipt after
submitting a Purchase Invoice.

To do this select Purchase Receipt from under the Create menu button.

![Create Purchase Receipt From a Purchase Invoice](./images/from-purchase-invoice.png)

::: tip Back Reference

This will create a Purchase Receipt with a reference to the Purchase Invoice and allows you
to view all created Purchase Receipts from the Purchase Invoice.
:::

### From the List View

To do this first navigate to the Purchase Receipt page: `Inventory > Purchase Receipt` then
click on the blue `+` button.

The creation method is shared with with other transactional entries, for more
information check [this link](/transactions/transactional-entries.html#creating-an-entry).

::: warning No Back Reference

This method doesn't create links to any Purchase Invoices and is an isolated entry.
:::

### Purchase Receipt Form

After selecting one of the above two methods of creating a Purchase Receipt, you will
see the Purchase Receipt form.

![Purchase Receipt Form](./images/purchase-receipt-form.png)

If you created the Purchase Receipt from a Purchase Invoice, all the rows will be filled
out for you. Else you will have to enter the Purchase Receipt details.

Once the Purchase Receipt details have been entered, click on Save and then Submit to
make the Purchase Receipt entry.

A Purchase Receipt can have one of the four following statuses:

| Status        | Description                                   |
| ------------- | --------------------------------------------- |
| Submitted     | Purchase Receipt entry submitted              |
| Return        | Purchase Receipt Return entry submitted       |
| Return Issued | Return entry created against Purchase Receipt |
| Cancelled     | Purchase Receipt entry cancelled              |

## Purchase Receipt Return

If you created a Purchase Receipt for an item that you returned, you can create a Purchase Receipt Return entry to reflect the return.

A Purchase Receipt Return entry can be created from an existing Purchase Receipt entry that has been submitted or from a new Purchase Receipt entry.

### Enable Stock Returns

To create Purchase Receipt Returns the Stock Returns feature needs to be enabled. To do
this, check the **Enable Stock Returns** option in
[Inventory Settings](/inventory/settings.html#inventory-settings) under the Features section.

### Creating a Purchase Receipt Return

1. Open the Purchase Receipt entry to be returned.
2. Click on `Create > Return`.
   ![Create Purchase Receipt Return](./images/create-purchase-receipt-return.png)
3. The Party and Item details will be fetched from the original Purchase Receipt
   entry. You can set the quantity of Items returned.
   ![Purchase Receipt Return Form](./images/purchase-receipt-return-form.png)
4. Save and Submit.

::: info
Item quantity and Payment amount will be in negative to indicate that it is a return.
:::

## How does Purchase Receipt Return affect General Ledger

The Purchase Receipt Return entry will create General Ledger entries to reverse the impact of the original Purchase Receipt.

![Purchase Receipt Return in General Ledger](./images/purchase-receipt-return-in-general-ledger.png)

## View Ledger Entries

After a Purchase Receipt is submitted, both Stock Ledger and General Ledger entries
are created.

To view these you can click on the View button and select the one you would like
to see.

![View Ledger Entries](./images/view-purchase-receipt-ledger-entries.png)
