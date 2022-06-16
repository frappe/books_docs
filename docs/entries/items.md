# Items

_Item_ is term used by Frappe Books for anything that is purchased or sold using
a Sales or Purchase Invoice.

## Types of Items

An Item is classified by what purpose it's used for.

|   # | For       | Name           | Usage                       | Navigation                   |
| --: | :-------- | :------------- | :-------------------------- | :--------------------------- |
|   1 | Sales     | Sales Items    | Sales Invoices              | `Sales > Sales Items`        |
|   2 | Purchases | Purchase Items | Purchase Invoices           | `Purchases > Purchase Items` |
|   3 | Both      | Common Items   | Sales and Purchase Invoices | `Common > Common Items`      |

::: warning Usage
Make sure that you create the Item under the correct Navigation as this cannot
be changed after creation.
:::

## Item Fields

When creating a new Item the following fields are displayed:

1. Item Image: an image to identify the Item by.
2. Item Name: a name to identify the Item by, each Item should have a unique name.
3. Rate: base cost of an Item, this can be changed in the invoice.
4. Unit Type: base unit of the Item to which the rate is applied
5. Type: indicates whether the Item is a Product or a Service.
6. For: the purpose of the Item, whether it's for Sales, Purchases or Both.
7. Tax: tax applied on the Item when making an invoice, this can be changed in the invoice.
8. Description: textual description of what the Item is.
9. Income: the income account, account that is credited when the Item is sold.
10. Expense: the expense account, account that is debited when the Item is purchased.
11. HSN/SAC: the HSN/SAC code that is used for classifying Items.
