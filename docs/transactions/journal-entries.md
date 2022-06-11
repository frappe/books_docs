# Journal Entries

Use journal entries to record transactions that don’t necessarily identify strictly as a Sale or Purchase.

## Recording Expenses

When you have expenses that you pay at the time of purchase, you can record an
Expense directly using Journal Entry.

1. Go to Purchases > Journal Entry and click on the blue plus button. A Journal
   Entry form will open.
2. Here you will have to make at least two entries, one for Debit and one for
   Credit. Let’s say you incur an expense of ₹5,000 for traveling to a client
   site, and you paid it directly from your Bank Account, then you must do the
   following entries:

| Account         | Debit  | Credit |
| --------------- | ------ | ------ |
| Bank Account    |        | ₹5,000 |
| Travel Expenses | ₹5,000 |        |

<!-- ![Recording Expenses](/files/recording-expenses.png) -->

When you are making a Journal Entry, you must ensure that the total amount in
the Debit column should equal the total amount in the Credit column.

After you Save and Submit the Journal Entry, Frappe Books will do the necessary
ledger entries. You can check the entries from Menu > Ledger Entries.

## Recording prepayments

When a customer pays for a product or service that you haven’t delivered yet, it
cannot be booked as Income yet. This is a Liability for your business to fulfill
later.

1. Go to Sales > Journal Entry and click on the blue plus button. A Journal
   Entry form will open.
2. Now you will make two entries, one which Debits the amount into the Bank
   Account because you have received the payment, another which Credits the
   amount into a Liability account you may create known as Prepayments.

| Account      | Debit  | Credit |
| ------------ | ------ | ------ |
| Bank Account | ₹5,000 |        |
| Prepayment   |        | ₹5,000 |

<!-- ![Recording Prepayments](/files/recording-prepayments.png) -->

These are two examples of how you can make direct Journal Entries to account for
transactions that are different from Sales or Purchases.
