---
title: It's The Pennies What You Need to Pay Attention To
layout: post
---
<!-- title: It's The Pennies You've got to Watch out for -->

I recently filed my taxes and realized that I lost 15% of my US dividend due to double taxation. I had heard about the [W-8BEN](https://www.irs.gov/pub/irs-pdf/fw8ben.pdf) form that one can fill to prevent double taxation, but since 15% of my dividends would barely enough to buy a chair at Ikea —and I'm very lazy— I never bothered to fill it. I figured that it wasn't worth the overhead. However, a _hypothetical_ lost Ikea chair hurts less than an _actual_ lost Ikea chair. Seing those €19,23 lost to the IRS reminded me of my grandfather who used to say _"The big amounts of money protect themselves, its the pennies you've got to pay attention to"_ and it was enough for me to finally dedicate time to understand what this form is about and how to file it.

The main idea is that each country taxes the capital gains of its residents at whatever rate they find suitable (typically between 10 and 40%). Additionally, each country has the right to tax income that _arose_ there, regardless of where the owner of the asset resides. If you own dividend-generating stocks in country A and reside in country B. Then, country A will tax your dividend (i.e. withhold a % of it) and country B will tax what's left _again_. But... being taxed twice isn't nice, and countries want to encourage foreign investment. So bilateral agreements arose to avoid the double squeeze.

The W-8BEN form is one such agreement. It is simply the US saying, "If your country and I have agreed to it, I can drop my tax rate a bit to avoid you being taxed more than you should".

The ability to request a foreign goverment to drop your tax (e.g. Via the W-8BEN form) is convenient.  However, it is not always needed because your own government can also acknowledge that you already paid taxes elsewhere and credit that paid amount against your domestic tax bill. So, instead of saying "U.S. tax me less" you can say "Germany I already paid, so I owe you less".

There is a detail though. How much foreing tax each country is willing to credit is capped. This means that you can get taxed by a foreign government more than what your goverment is willing to credit. If you are taxed more than the "creditable cap", then that uncredited amount *is lost money*. That difference between what you were taxed by the foreing institution and what your country will credit is the double tax we want to avoid. This is the precise scenario where the W-8BEN form comes in handy, it allows you to lower your foreing tax rate and bring it within the theshold of what your country will credit fully. Double tax avoided, voila!

Intrestingly, when a country credits the foreing tax witheld against your tax bill it is essentially forfeiting that profit. Germany could say "I don't care how much you paid elsewhere, I'll tax you the same". But the point of bilaterality is that by abiding to the treaty Germany knows that U.S. residents investing in German companies will have the same benefit (U.S. will credit against their tax bill the tax witheld by Germany) this encouraging foreingers to buy German stocks.

Lets go over actual numbers and my specific example to make this concrete. Germany sets capital gains tax at 25%<a href="#fn1">[1]</a>
 and credits up to 15% of taxes paid elsewhere. The Netherlands and the U.S. set the dividend tax for non-residents at 15% and 30% respectively. Note how what the US taxes non-residents is higher than what Germany is willing to credit. US taxes 30%, Germany credits only 15%, that uncreditted 15% went to the IRS but could have gone to your nice new chair, in other words, you were taxed 15% more than you _could_ have.

My foreign dividends for 2025:


<div class="calculation">dutch_dividends = €38,46
us_dividends = €128,21</div>


The Netherlands witheld 15%. The U.S. 30%.

<div class="calculation">dutch_dividends_withheld = €38,46 * 15% = €4,92
us_dividends_withheld = €128,21 * 30% = €38,46</div>

Germany only credits up to 15% of foreign withholding tax against your domestic tax bill. Which means it credited...

<div class="calculation">dutch_dividends_withheld_credited = €38,46 * 15% = €4,92
us_dividends_withheld_credited = €128,21 * 15% = €19,23</div>


Germany credited the full €4,92 of my Dutch dividends withheld, but it credited only half of my U.S. dividends withheld, i.e. €38,46 / 2 = €19,23. Meaning I lost the other €19,23 forever. My grandfather would not be particularly proud.

To avoid future pennies from being lost —and make granpa proud— you can fill the W-8BEN form through your broker and lower your U.S. witholding tax rate. In the case of Germany, filling it will lower the U.S. dividend tax withheld from 30% to 15%. In my case meaning an extra €19,23 in my pocket.

So, go fill your W-8BEN form and start thinking about what piece of nice furniture to buy with that extra money you'll be getting.


<div class="notes-divider"><span> Notes </span></div>

<p id="fn1">[1] German tax law: <a href="https://www.gesetze-im-internet.de/estg/__32d.html" target="_blank">§32d EStG</a></p>
