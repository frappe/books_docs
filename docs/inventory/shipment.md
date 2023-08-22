# Shipment

Shipment is an inventory transaction that records the delivery of stock to a
customer after a sale has been made.

Shipments record outward movement of stock. Hence a shipment can take place only
if there is sufficient quantity of an Item at the selected Location.

## Creating a Shipment

There are two ways to create a Shipment.

### From a Sales Invoice

Since a shipment of stock follows a sale, you can create a Shipment after
submitting a Sales Invoice.

To do this select Shipment from under the Create menu button.

![Create Shipment From a Sales Invoice](./images/from-sales-invoice.png)

::: tip Back Reference

This will create a Shipment with a reference to the Sales Invoice and allows you
to view all created Shipments from the Sales Invoice.
:::

### From the List View

To do this first navigate to the Shipment page: `Inventory > Shipment` then
click on the blue `+` button.

The creation method is shared with with other transactional entries, for more
information check [this link](/transactions/transactional-entries.html#creating-an-entry).

::: warning No Back Reference

This method doesn't create links to any Sales Invoices and is an isolated entry.
:::

### Shipment Form

After selecting one of the above two methods of creating a Shipment, you will
see the Shipment form.

![Shipment Form](./images/shipment-form.png)

If you created the Shipment from a Sales Invoice, all the rows will be filled
out for you. Else you will have to enter the Shipment details.

Once the Shipment details have been entered, click on Save and then Submit to
make the Shipment entry.

A Shipment can have one of the four following statuses:

| Status        | Description                           |
| ------------- | ------------------------------------- |
| Submitted     | Shipment entry submitted              |
| Return        | Shipment Return submitted             |
| Return Issued | Return entry created against Shipment |
| Cancelled     | Shipment entry cancelled              |

## Shipment Return

The customer can return an already shipped Item due to quality issues,
delay in delivery, or some other issue.

To reflect this you can create a Shipment Return from the original Shipment
entry or manually create one from a new Shipment Entry.

### Enable Stock Returns

To create Shipment Returns the Stock Returns feature needs to be enabled. To do
this, check the **Enable Stock Returns** option in
[Inventory Settings](/inventory/settings.html#inventory-settings) under the Features section.

### Creating a Shipment Return

1. Open the Shipment entry to be returned.
2. Click on `Create > Return`.
   ![Create Shipment Return](./images/create-shipment-return.png)
3. The Party and Item details will be fetched from the original Shipment entry.
   You can set the quantity of Items returned.
   ![Shipment Return Form](./images/shipment-return-form.png)
4. Save and Submit.

::: info
Item quantity and Payment amount will be in negative to indicate that it is a return.
:::

##  Shipment Return impact on General Ledger

The Shipment Return entry will create General Ledger entries to reverse the impact of the original Shipment.

![Shipment Return in General Ledger](./images/shipment-return-in-general-ledger.png)

## View Ledger Entries

After a Shipment is submitted, both Stock Ledger and General Ledger entries are
created.

To view these you can click on the View button and select the one you would like
to see.

![View Ledger Entries](./images/view-shipment-ledger-entries.png)
