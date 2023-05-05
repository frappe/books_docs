# Serial Number

With a Serial Number, you can keep track of individual serialised items.
The Serial Number status will tell you its current inventory status.

## Enable Serial Number

The Serial Number feature needs to be enabled first by checking the Enable Serial Number.
option under [Inventory Settings](/inventory/settings)

To navigate to the list of Serial Numbers, open [Quick Search](/miscellaneous/search)
and then type "serial number list" and select the first option.

## Serialized Items

Once you've enabled Serial Number, you can mark an item as a serialised item by
first checking `Track Item` and then `Has Serial Number.`

![Enable Has Serial Number](./images/item-has-serial-no.png)

::: info Track Item
Has Serial Number. can be enabled only if Track Item is set.
:::

## Mentioning Item Serial Number

Once a Serial Number has been enabled for an [Item](/entries/items), transactions involving 
the item that update Inventory, such as Stock Movements, Shipments, and Purchases, must 
include the Serial Number. 

This can be done by clicking the edit button on the table row and selecting the Serial Number.

![Mentioning Serial Numbers](./images/mentioning-serial-no.png)

::: info Serial Number
If your item is serialised, you must put the Serial Number in the related
column, one per line.
:::

## Serial Number Status

- Serial Number Status is set based on Stock Entry.
- Serial Numbers can automatically be created from a Material Receipt or Purchase
  Receipt. Serial Numbers are automatically created if you mention them in
  the Serial Numbers column.
- Only Serial Numbers with status `Active` can be delivered.
- When a Shipment mentioning the Serial Number is created, status of
  the serial number changes to `Delivered`.
