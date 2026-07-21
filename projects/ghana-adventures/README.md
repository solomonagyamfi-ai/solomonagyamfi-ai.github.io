# Ghana Adventures: Data-Driven Off-Season Booking Strategy

> **Portfolio case study** · Power BI · Power Query · MySQL · Tourism analytics

## Executive summary

Ghana Adventures needed a clearer view of its booking patterns and practical ways to improve demand during the slower August–November period. I analysed booking, revenue, seasonality, customer, tour-package and channel data, then translated the findings into a focused marketing plan.

The analysis showed that repeat customers generated substantially more value per booking and that digital channels offered the strongest route for targeted off-season promotions. The recommended strategy prioritised customer retargeting, experience bundles, limited group and weekday offers, and loyalty benefits rather than deep discounting.

## Business brief

**Core question:** How can Ghana Adventures use data-driven marketing to boost off-season bookings?

The work needed to answer four supporting questions:

1. When are booking volumes weakest?
2. Which tour packages contribute the most revenue?
3. Which booking channels offer the best route to customers?
4. How do repeat and new customers differ in value?

## Data scope

The working data included:

- booking date and customer identifier
- tour package and destination
- booking price and booking type
- repeat-customer status
- season and booking channel

## Analytical process

### 1. Prepare

- Audited field names, missing values and inconsistent entries.
- Corrected data types for dates, identifiers, prices and categories.
- Standardised fields required for accurate grouping and comparison.

### 2. Model

Created measures for:

- total bookings
- total revenue
- average booking value
- repeat-customer rate
- monthly booking and revenue trends

### 3. Analyse

Compared:

- peak and off-peak booking patterns
- revenue by tour package
- booking share by channel
- average spend for repeat and new customers

### 4. Communicate

Developed a Power BI dashboard using KPI cards, a monthly booking and revenue chart, a ranked package chart, a channel-share visual and a repeat-versus-new customer comparison.

## Challenges and responses

| Challenge | Response |
|---|---|
| Inconsistent or incorrect imported data types | Reviewed the schema and applied suitable date, numeric and text types before calculation. |
| Similar channel categories weakened the digital view | Grouped online and website activity when assessing combined digital reach. |
| Revenue alone could lead to weak product decisions | Framed revenue alongside margin, capacity, customer feedback and possible duplicate package names. |
| Weak off-season demand required practical action | Focused recommendations on targeted value creation instead of broad discounting. |

## Key findings

| Measure | Result |
|---|---:|
| Total revenue | **GHS 152,250** |
| Repeat-customer rate | **37.8%** |
| Average spend per repeat customer booking | **GHS 808.52** |
| Average spend per new customer booking | **GHS 559.31** |
| Repeat-customer spending uplift | **Approximately 44.6%** |

Additional observations:

- August–November represented the clearest off-season opportunity.
- Online and website activity formed the strongest combined digital channel.
- Repeat customers were an especially valuable audience for targeted offers and loyalty activity.

## Recommendations

1. Retarget previous customers with email and digital advertising during August–November.
2. Promote limited early-booking, weekday and group offers.
3. Bundle transport, meals and guided experiences to increase perceived value.
4. Develop corporate, school and association packages for slower months.
5. Introduce loyalty and premium private-tour benefits around repeat-customer value.
6. Review profit margin, capacity, feedback and duplicate package names before discontinuing any offer.

## Business outcome

The final output converted booking records into a clear off-season marketing strategy. It gave decision-makers a concise view of when demand was weakest, which customers were most valuable and which actions could increase demand without depending on deep discounts.

## Repository assets to include

When publishing the complete project repository, include:

- a de-identified or sample dataset
- a data dictionary
- SQL or Power Query cleaning steps
- Power BI measures used in the dashboard
- labelled dashboard screenshots
- a short methodology or assumptions note

## Project credit

Individual training case study developed during data analytics learning. The business scenario and dataset should be credited to the relevant programme or source when the original files are published.

[← Back to portfolio](../../README.md)
