---
title: It's The Pennies What You Need to Pay Attention To
layout: post
draft: true
---

I recently filed my taxes and realized that I lost 15% of my US dividends due to double taxation. I had heard about the [W-8BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf) form which one can fill out to request a tax rate reduction and thus avoid double taxation, but since 15% of my dividends is barely enough to buy a chair at IKEA —and I'm very lazy— I never bothered to fill it out. I figured that it wasn't worth the overhead. However, a _hypothetical_ lost chair hurts less than an _actual_ lost chair. Seeing those €19,23 lost to the IRS reminded me of my grandfather who used to say _"The big amounts of money protect themselves, it's the pennies what you need to pay attention to"_ and it was enough for me to finally dedicate time to understand what this form is about and how to file it.

The main idea is that each country taxes the dividend income of its residents at whatever rate they find suitable (typically between 10 and 40%). Additionally, each country has the right to tax income that _arose_ there, regardless of where the owner of the asset resides. If you own dividend-generating stocks in country A and reside in country B, then country A will tax your dividend (i.e. withhold a % of it) and country B will tax what's left _again_. But... being taxed twice isn't nice, and countries want to encourage foreign investment. So bilateral agreements arose to avoid the double squeeze.

The W-8BEN is how you claim the benefit of one such agreement. It is you telling the US: "I live in a country you have a deal with, so please apply the reduced rate agreed on so I'm not taxed more than I should." <a href="#fn1">[1]</a>

The ability to request a foreign government to drop your tax (e.g. via the W-8BEN form) is convenient. However, it is not always needed because your own government can also acknowledge that you already paid taxes elsewhere and credit that paid amount against your domestic tax bill. So, instead of saying "US please tax me less" you can say "Germany I already paid some tax on this income, so I owe you less".

There is a detail though. How much foreign tax each country is willing to credit is capped. This means that you can get taxed by a foreign government more than what your government is willing to credit. If you are taxed more than the "creditable cap", then that uncredited amount *is lost money*. That gap between what the foreign government taxed you and what your country will credit _is_ the double tax we want to avoid. Those are the pennies we want to pay attention to. And this is the precise scenario where the W-8BEN form comes in handy, it allows you to lower your foreign tax rate and bring it within the threshold of what your country will credit fully. Double tax avoided, _voila!_

Interestingly, when a country credits the foreign tax withheld against your tax bill, it is essentially forfeiting that profit. Germany could say "I don't care how much you paid elsewhere, I'll tax you the same". But the point of bilaterality is that by following the treaty, Germany knows that US residents investing in German companies will have the same benefit (i.e. the US will credit against their tax bill the tax withheld by Germany), thus encouraging Americans to buy German stocks.

Let's go over actual numbers and my specific example to make this concrete. Germany sets dividend tax at 25% and credits up to 15% of taxes paid elsewhere. The Netherlands and the US set the dividend tax for non-residents at 15% and **30%** respectively. Note how what the US taxes non-residents is higher than what Germany is willing to credit. US taxes 30%, Germany credits only up to 15%. That uncredited 15% went to the IRS but could have gone to your nice new chair, in other words, you were taxed 15% more than you _could_ have. <a href="#fn2">[2]</a>

My foreign dividends for 2025:


<div class="calculation">dutch_dividends = €32,80
us_dividends = €128,21</div>


The Netherlands withheld 15%. The US 30%.

<div class="calculation">dutch_dividends_withheld = €32,80 * 15% = €4,92
us_dividends_withheld = €128,21 * 30% = €38,46</div>

Germany only credits up to 15% of foreign withholding tax against your domestic tax bill. Which means it credited...

<div class="calculation">dutch_dividends_withheld_credited_by_germany = €32,80 * 15% = €4,92
us_dividends_withheld_credited_by_germany = €128,21 * 15% = €19,23</div>


Germany credited the full €4,92 of my Dutch dividends withheld, but it credited only half of those from the US, i.e. €38,46 / 2 = €19,23. Meaning I lost the other €19,23. My grandfather would not be particularly proud. <a href="#fn3">[3]</a>

To keep future pennies from being lost —and make grandpa proud— you can fill out the W-8BEN form through your broker and lower your US withholding tax rate. In the case of Germany, filling it out will lower the US dividend tax withheld from 30% to 15%. In my case meaning an extra €19,23 in my pocket. It might not seem like much but over the long run this compounds.

So, go file your W-8BEN form and start thinking about what piece of nice furniture to buy with that extra money you'll be getting.


<div class="notes-divider"><span> Notes </span></div>

<p id="fn1">[1] Technically is your broker talking to the US. I added a direct link to the form provided by the IRS for reference, but you normally file this through your broker.</p>

<p id="fn2">[2] I didn't know how often these rates change and wanted to provide snapshots of the law as sources here in case they change by the time you read this post. But it turns out that international dividend tax rates are incredibly stable, they have not changed in over a decade. But, these can change anyways, so here are the <a href="https://business.gov.nl/regulations/dividend-tax/">Dutch</a>, <a href="https://www.law.cornell.edu/uscode/text/26/871">US</a> and <a href="https://www.gesetze-im-internet.de/estg/__32d.html" target="_blank">German</a> sources. </p> 

<p id="fn3">[3] I said I "lost" the other €19 but you can actually reclaim over-withheld tax by filling out a 1040-NR form.</p>