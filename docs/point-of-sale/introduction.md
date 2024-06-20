# Introduction to Point of Sale

Point of Sale, or POS for short, refers to where a transaction between a customer
and a business takes place. This is often a retail store's check-out counter.
Using POS, you can create Sales Invoices, Payment Entries, and Shipments all in
one place with a few clicks.

## Enabling Point of Sale

To enable Point of Sale you will have to check the **Enable Inventory** option
under [Inventory Settings](/inventory/settings).
To Navigate: `Setup > Settings > Inventory Tab`

Once that is done you will have to restart Frappe Books to access POS from the sidebar.

::: info
You can start using Point of Sale right after enabling it. However, it's recommended
to review and adjust the [Defaults](/miscellaneous/settings#defaults) and
[POS Settings](/miscellaneous/settings#pos-settings) to align it with your business needs.
:::

## Creating POS Shift

Before processing transactions using POS, you need to begin a POS Shift and specify the
Opening Amounts for the available Payment Methods.

To perform this, navigate to POS from the Sidebar

You could see two sections there.

1.  **Cash In Denomination:**
    For simplified Cash counting, enter the total Cash Amount in Denominations, and the
    system will automatically perform the calculation for you.
2.  **Opening Amount:**
    You can specify the Opening Amounts for the Cash and Transfer Payment Methods.

Once you've filled the required datas, click on **Submit** to create the POS Shift.

Upon Submission, a Journal Entry will be created in the background to transfer the Opening
Cash Amount to the Counter Cash Account that's set on the
[POS Settings](/miscellaneous/settings#pos-settings).

| Account      	| Dr  	| Cr  	|
|--------------	|-----	|-----	|
| Counter Cash 	| 100 	| 0   	|
| Cash         	| 0   	| 100 	|

## Creating a Transaction

### Select an Item

There are two ways to select an item:

1. **Search:** Type the Item's name in the search bar and press Enter or click on the Item
   in the search results.
2. **Items List:** Scroll through the list of items and click on the Item you want to select.

Clicking on an already selected Item will increase the selected quantity by one.

::: info
Only Items with Track Inventory enabled, will be displayed in the list.
:::

### Edit Quantity, Select Batches and UOM Conversions

Click on the Arrow placed before the Item name to expand the selected Item's row. There you
can set Quantity, perform UOM Conversions, set Batches, Serial Numbers and Discounts.

### Creating Payments

Click on the **Pay** button to open up the Payment Screen. You can select the Payment Type by
clicking either Cash or Transfer button.

### Submit Invoice

Clicking the **Submit** button will Submit the Sales Invoice, Payment Entry and Shipment at once.

::: info
If you want to Print the Sales Invoice after submitting it, click on **Submit and Print**
option instead.
:::

## Closing POS Shift

Click on **Close POS Shift** Button to show the POS Shift Close Screen.

You could see two tables that denotes,

1. **Closing Cash:**
   For simplified Cash counting, enter the Closing Cash Amount in Denominations, and the
   system will automatically perform the calculation for you.

2. **Closing Amounts:**
   You can also manually enter the Closing Amounts for Cash and Transfer Payment methods.
   The **Expected Amount** field will automatically display the total transacted value
   for each Payment Method.

## Impacts on Accounts upon POS Shift Closing

When a POS Shift is closed, a Journal Entry is created to transfer Amounts from Counter Cash
Account to Cash Account. It also creates Write off entries when the Exepcted and Closing Amounts differ.

We could expect three scenarios here. 


1. **Expected Amount and Closing Amount are equal.**

   | Payment Method 	| Closing Amount 	| Expected Amount 	| Difference 	|
   |----------------	|---------------:	|----------------:	|-----------:	|
   | Cash           	| 100            	| 100             	| 0          	|

   Journal Entry:

   | Account      	| Dr  	| Cr  	|
   |--------------	|-----:	|-----:	|
   | Cash         	| 100 	| 0   	|
   | Counter Cash 	| 0   	| 100 	|


2. **Closing Amount is lesser than Expected Amount _(shortage of Cash)_**

   | Payment Method 	| Closing Amount 	| Expected Amount 	| Difference 	|
   |----------------	|---------------:	|----------------:	|-----------:	|
   | Cash           	|             50 	|             100 	|        -50 	|

   Journal Entry:

   | Account      	| Dr 	| Cr 	|
   |--------------	|---:	|---:	|
   | Cash         	| 50 	|  0 	|
   | Counter Cash 	|  0 	| 50 	|
   | Cash         	| 50 	|  0 	|
   | Write Off    	|  0 	| 50 	|


3. **Closing Amount is greater than Expected Amount _(excess of Cash)_**

   | Payment Method 	| Closing Amount 	| Expected Amount 	| Difference 	|
   |----------------	|---------------:	|----------------:	|-----------:	|
   | Cash           	|            150 	|             100 	|         50 	|

   Journal Entry:

   | Account      	|  Dr 	|  Cr 	|
   |--------------	|----:	|----:	|
   | Cash         	| 150 	|   0 	|
   | Counter Cash 	|   0 	| 150 	|
   | Write Off    	|  50 	|   0 	|
   | Cash         	|   0 	|  50 	|