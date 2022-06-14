# Accounting Basics

A small primer to get you up to speed on the concepts of accounting.

Let's understand the concept of accounting with the example of an imaginary
business that is just starting out.

**Owner Investment**: Let’s say we’re starting a Home Interior business and we have ₹5,00,000 of
capital to start our business.

> Bank balance will initially be ₹5,00,000.

**First Expense**: We will need an operating place where we can work and meet clients. For
this, we rent out a co-working space for ₹40,000 per month. This is our first
expense.

> Bank balance will now be ₹5,00,000 - ₹40,000 = ₹4,60,000.

**First Income**: We have invested some cash, and we have a working place. Now
we make our first sale having a value of ₹30,000. We earned ₹30,000 from our
first customer. This is our first income.

> Bank balance at this point will be ₹4,60,000 + ₹30,000 = ₹4,90,000.

**Accounts Payable**: Finally, Let’s say we decided to hire a Web Agency to build a website for us,
they charge ₹50,000 which will be paid after 2 months from current date.

At this point we haven’t paid them any money, but we are liable to pay them in
the future. This is a liability and will be recorded under Accounts Payable.

## Events and Accounts

Let’s list these events down in a table:

|   # | Event            |      Amount |
| --: | ---------------- | ----------: |
|   1 | Owner Investment | + ₹5,00,000 |
|   2 | Rent             |   - ₹40,000 |
|   3 | Sales            |   + ₹30,000 |
|   4 | Accounts Payable |   - ₹50,000 |
|   5 | _Total_          | _₹4,40,000_ |

Now, let's categorize these into the five types of Accounts and list their final
balances:

|   # | Account                        |    Amount |
| --: | ------------------------------ | --------: |
|   1 | Asset (Bank)                   | ₹4,90,000 |
|   2 | Liabilities (Accounts Payable) |   ₹50,000 |
|   3 | Equity (Owner Investment)      | ₹5,00,000 |
|   4 | Income (Sales)                 |   ₹30,000 |
|   5 | Expense (Rent)                 |   ₹40,000 |

## Impact on Accounts

Let’s take a look at each transaction and understand which accounts will get
affected, from an accounting point-of-view:

### 1. Cash Investment

Since you, the owner, invested money into the business, it is a liability.
So, Accounts Payable, which is a Liability account, is increased by
₹5,00,000.

Also, the money in the Bank Account, which is an Asset account, is increased
by ₹5,00,000.

| Account          |    Credit |     Debit |
| ---------------- | --------: | --------: |
| Accounts Payable | ₹5,00,000 |         0 |
| Bank Account     |         0 | ₹5,00,000 |

### 2. Rent

Rent is an immediate expense, so it is recorded in the Rent Account, which is
an Expense account, it is increased by ₹40,000.

Also, the money is spent from the Bank Account, which is an Asset account, it
is decreased by ₹40,000.

| Account      |  Credit |   Debit |
| ------------ | ------: | ------: |
| Rent Account |       0 | ₹40,000 |
| Bank Account | ₹40,000 |       0 |

### 3. First Sale

We got an immediate payment, it is recorded in Sales Account, which is an
Income account, the balance is increased by ₹30,000.

Also, we received the money in our Bank Account directly, so it’s balance
increases by ₹30,000.

| Account        |  Credit |   Debit |
| -------------- | ------: | ------: |
| Income Account | ₹30,000 |       0 |
| Bank Account   |       0 | ₹30,000 |

### 4. Hiring a Web Agency

We hired a Web Agency for some work, and we are liable to pay them in the
future. This is recorded in Accounts Payable by increasing the amount by
₹50,000.

Since this is an expense for us, we also increase the balance in the Vendor
Expense Account by ₹50,000.

| Account          |  Credit |   Debit |
| ---------------- | ------: | ------: |
| Accounts Payable | ₹50,000 |       0 |
| Expense Account  |       0 | ₹50,000 |

---

As you might have noticed, every transaction we do in our business affects two
accounts. This is the basis of double-entry bookkeeping system.

You can test this out by creating a **Sales Invoice** in Frappe Books, and then
check the **General Ledger Report** to see which accounts were affected.

## Credit and Debit

The words Credit and Debit mean different things when applied to different
accounts.

- For **Assets** and **Expense** accounts Credit implies a decrease in balance and Debit
  implies and increase in balance.

- For **Liabilities** and **Income** accounts Credit implies an increase in balance and Debit
  implies and decrease in balance.

::: tip AEDLIC
You can remember this by the abbreviation **AEDLIC** which would stand for:

**A**ssets and **E**xpenses **D**ebit, **L**iabilities and **I**ncome **C**redit
:::
