import { Medicine } from "../Model/Model";

const MedicineData:Medicine[] =  [
{
 ID: 1,
 Medname: "Echinacea Extract",
 Image: "https://i.ibb.co/6JZMKrD/71m5-N6h-4-JL-AC-UF1000-1000-QL80.jpg",
 Price: 19.99,
 Category: "Herbal Care",
 Company: "GreenBotanicals",
 Description: "Echinacea extract is known for its immune-boosting properties. It supports the body's natural defense mechanisms and helps maintain overall well-being."
},
{
 ID: 2,
 Medname: "Turmeric Capsules",
 Image: "https://i.ibb.co/8NKrrSt/download-5.jpg",
 Price: 24.99,
 Category: "Herbal Care",
 Company: "NatureWellness",
 Description: "Turmeric capsules contain curcumin, a powerful anti-inflammatory and antioxidant compound. They may help reduce inflammation and support joint health."
},
{
 ID: 3,
 Medname: "Ginger Tea",
 Image: "https://i.ibb.co/1qvg3yG/images-2.jpg",
 Price: 9.99,
 Category: "Herbal Care",
 Company: "HarmonyHerbs",
 Description: "Ginger tea is known for its digestive benefits and soothing properties. It can help alleviate nausea and support a healthy digestive system."
},
{
 ID: 4,
 Medname: "Peppermint Oil",
 Image: "https://i.ibb.co/bRqBTFh/download-6.jpg",
 Price: 14.99,
 Category: "Herbal Care",
 Company: "EssentialWell",
 Description: "Peppermint oil is often used for its refreshing aroma and potential benefits for respiratory health. It can also be applied topically for a cooling sensation."
},
{
 ID: 5,
 Medname: "Chamomile Tincture",
 Image: "https://i.ibb.co/dLb6FBG/81o7yk-RMILL-AC-UF1000-1000-QL80.jpg",
 Price: 29.99,
 Category: "Herbal Care",
 Company: "NaturalHarvest",
 Description: "Chamomile tincture is known for its calming and relaxing properties. It may help promote better sleep and ease tension and anxiety."
},

{
 ID: 6,
 Medname: "Folate Supplement",
 Image: "https://i.ibb.co/5YY3WvM/istockphoto-494066462-612x612.jpg",
 Price: 15.99,
 Category: "Women's Care",
 Company: "VitalWoman",
 Description: "Folate supplements are essential for women's health, especially during pregnancy. They support fetal development and help prevent neural tube defects."
}
,
{
 ID: 7,
 Medname: "Calcium and Vitamin D Tablets",
 Image: "https://i.ibb.co/FKbsFs0/1635914221-135289-0.jpg",
 Price: 17.99,
 Category: "Women's Care",
 Company: "HealthHarmony",
 Description: "These tablets provide a combination of calcium and vitamin D, crucial for maintaining strong bones and preventing osteoporosis in women, especially post-menopause."
},
{
 ID: 8,
 Medname: "Iron and B12 Complex",
 Image: "https://i.ibb.co/Jn2FSSj/61n-W4j6-Enr-L-AC-UF894-1000-QL80.jpg",
 Price: 12.99,
 Category: "Women's Care",
 Company: "FemWellness",
 Description: "Iron and B12 complex supplements are designed to address iron deficiency anemia, a common concern for women, supporting energy levels and overall well-being."
},
{
 ID: 9,
 Medname: "Hormone Balancing Tea",
 Image: "https://i.ibb.co/vHQ0PzY/artemis-hormone-balance-tea-60551.jpg",
 Price: 9.99,
 Category: "Women's Care",
 Company: "HerbalHarbor",
 Description: "This herbal tea is formulated to support hormone balance in women. It includes ingredients known for their potential benefits in regulating hormonal fluctuations."
},
{
 ID: 10,
 Medname: "Cranberry Capsules",
 Image: "https://i.ibb.co/nPXPr06/bottles-with-cranberry-pills-and-capsules-on-white-background-2-H5-MP9-K.jpg",
 Price: 14.99,
 Category: "Women's Care",
 Company: "WomenWell",
 Description: "Cranberry capsules are often used to promote urinary tract health in women. They may help prevent urinary tract infections and support overall bladder function."
},
{
 ID: 11,
 Medname: "Antiviral Tablets",
 Image: "https://i.ibb.co/mCq7VfC/images-3.jpg",
 Price: 29.99,
 Category: "COVID Special",
 Company: "PandemicGuard",
 Description: "Antiviral tablets designed to target specific mechanisms of viral replication, potentially aiding in the treatment of COVID-19 and other viral infections."
},
{
 ID: 12,
 Medname: "Immune Booster Syrup",
 Image: "https://i.ibb.co/mSw9kYz/91x-B74r-UD1-L.jpg",
 Price: 24.99,
 Category: "COVID Special",
 Company: "ShieldHealth",
 Description: "This syrup is formulated with immune-boosting ingredients to support the body's defenses during viral outbreaks, including COVID-19."
},
{
 ID: 13,
 Medname: "Respiratory Support Inhaler",
 Image: "https://i.ibb.co/wwFp41y/inhaler-818056-5100.jpg",
 Price: 19.99,
 Category: "COVID Special",
 Company: "BreatheEasy",
 Description: "Inhaler designed to provide respiratory support during COVID-19 infections, helping ease breathing difficulties and promoting lung health."
},
{
 ID: 14,
 Medname: "Anti-Inflammatory Capsules",
 Image: "https://i.ibb.co/GFx5Spw/71-MLs-MXqo-SL.jpg",
 Price: 34.99,
 Category: "COVID Special",
 Company: "InflameGuard",
 Description: "Capsules containing anti-inflammatory compounds to help manage inflammation associated with COVID-19 and reduce the risk of severe symptoms."
},
{
 ID: 15,
 Medname: "Thermometer - Smart Health Monitor",
 Image: "https://i.ibb.co/PGKtxZp/71-F0-I-M1a-OL-SL1500.jpg",
 Price: 39.99,
 Category: "COVID Special",
 Company: "HealthTech Solutions",
 Description: "A smart thermometer for monitoring body temperature, an important tool in early detection and management of COVID-19 symptoms."
},
{
 ID: 16,
 Medname: "Prenatal Multivitamin",
 Image: "https://i.ibb.co/xzB7p1s/1200px-Prenatal-vitamin-tablets.jpg",
 Price: 22.99,
 Category: "Baby and Mom Care",
 Company: "MommyWell",
 Description: "A comprehensive prenatal multivitamin to support the health of expecting mothers and provide essential nutrients for the development of the baby."
},
{
 ID: 17,
 Medname: "Baby Diaper Rash Cream",
 Image: "https://i.ibb.co/Np6ts1p/2100693-himalaya-diaper-rash-cream-20g.jpg",
 Price: 8.99,
 Category: "Baby and Mom Care",
 Company: "TinyCare",
 Description: "A gentle diaper rash cream formulated to soothe and protect the delicate skin of babies, preventing and relieving discomfort from diaper rashes."
},
{
 ID: 18,
 Medname: "Postpartum Recovery Tea",
 Image: "https://i.ibb.co/hC8N87P/download-7.jpg",
 Price: 12.99,
 Category: "Baby and Mom Care",
 Company: "NurturingHerbs",
 Description: "A special blend of herbs designed to support postpartum recovery in new mothers, promoting healing and overall well-being."
},
{
 ID: 19,
 Medname: "Infant Gas Relief Drops",
 Image: "https://i.ibb.co/vZKnw8H/download-8.jpg",
 Price: 9.99,
 Category: "Baby and Mom Care",
 Company: "GentleCare",
 Description: "Gentle drops to relieve gas and colic discomfort in infants, providing relief for both the baby and the parents during fussy times."
},
{
 ID: 20,
 Medname: "Nursing Support Supplements",
 Image: "https://i.ibb.co/7gxx7b7/61-MLj5-P3yq-L.jpg",
 Price: 16.99,
 Category: "Baby and Mom Care",
 Company: "LactoLove",
 Description: "Supplements to support breastfeeding mothers, promoting lactation and ensuring they receive the necessary nutrients for themselves and their babies."
}
,
{
 ID: 21,
 Medname: "Vitamin C Tablets",
 Image: "https://i.ibb.co/HhZDR39/download-9.jpg",
 Price: 12.99,
 Category: "Supplements",
 Company: "WellnessEssentials",
 Description: "Vitamin C tablets known for their immune-boosting properties, helping to support overall health and protect against infections."
},
{
 ID: 22,
 Medname: "Omega-3 Fish Oil Capsules",
 Image: "https://i.ibb.co/pxLxdrP/fish-oil-omega-3-capsules-Getty-Images-1430921498-3000x2000.jpg",
 Price: 18.99,
 Category: "Supplements",
 Company: "HeartHealth",
 Description: "Omega-3 fish oil capsules rich in essential fatty acids that promote cardiovascular health, brain function, and joint flexibility."
},
{
 ID: 23,
 Medname: "Probiotic Blend",
 Image: "https://i.ibb.co/t3t2FYn/pn-probiotic-blend-500x500.jpg",
 Price: 24.99,
 Category: "Supplements",
 Company: "GutBalance",
 Description: "A probiotic blend to support a healthy gut microbiome, aiding digestion, and promoting a balanced immune system."
},
{
 ID: 24,
 Medname: "Calcium and Magnesium Supplement",
 Image: "https://i.ibb.co/0rWY6tK/cmzv-1445x.jpg",
 Price: 15.99,
 Category: "Supplements",
 Company: "BoneHealth",
 Description: "A supplement combining calcium and magnesium for bone health, supporting strong bones and overall musculoskeletal well-being."
},
{
 ID: 25,
 Medname: "Energy Boosting Ginseng Capsules",
 Image: "https://i.ibb.co/jbczD6b/download-10.jpg",
 Price: 21.99,
 Category: "Supplements",
 Company: "VitalityBoost",
 Description: "Ginseng capsules formulated to provide a natural energy boost, supporting vitality and combating fatigue."
},
{
 ID: 26,
 Medname: "Complete Meal Replacement Shake",
 Image: "https://i.ibb.co/8crrLNy/d8d01bcc79af707a311d0568b4e02d98.jpg",
 Price: 29.99,
 Category: "Nutrition",
 Company: "NutriBlend",
 Description: "A nutritious meal replacement shake designed to provide essential vitamins, minerals, and protein for a balanced and convenient dietary option."
},
{
 ID: 27,
 Medname: "Vegetarian Protein Powder",
 Image: "https://i.ibb.co/Pm2S10Z/658d6e5ce2bea67f485a51ee-orgain-organic-vegan-protein-powder.jpg",
 Price: 24.99,
 Category: "Nutrition",
 Company: "GreenProteins",
 Description: "A plant-based protein powder enriched with amino acids, suitable for vegetarians and those looking to support muscle growth and repair."
},
{
 ID: 28,
 Medname: "Fiber and Prebiotic Capsules",
 Image: "https://i.ibb.co/SySPPTZ/images-4.jpg",
 Price: 18.99,
 Category: "Nutrition",
 Company: "GutHealthPlus",
 Description: "Capsules containing a blend of fiber and prebiotics to support digestive health, promote gut flora balance, and enhance nutrient absorption."
},
{
 ID: 29,
 Medname: "Liquid Vitamin D3 Drops",
 Image: "https://i.ibb.co/MD5V3zx/download-12.jpg",
 Price: 14.99,
 Category: "Nutrition",
 Company: "SunshineNutrients",
 Description: "Liquid vitamin D3 drops for maintaining bone health, supporting immune function, and ensuring optimal vitamin D levels, especially in deficient conditions."
},
{
 ID: 30,
 Medname: "Antioxidant-Rich Berry Extract",
 Image: "https://i.ibb.co/n13GCWc/image-1024.jpg",
 Price: 19.99,
 Category: "Nutrition",
 Company: "BerryVitality",
 Description: "A concentrated berry extract supplement packed with antioxidants to promote overall health and protect against oxidative stress."
}
, {
 ID: 31,
 Medname: "Antibacterial Hand Sanitizer",
 Image: "https://i.ibb.co/x6BK2r4/9652-12-jpg-650.jpg",
 Price: 7.99,
 Category: "Personal Care",
 Company: "CleanHands",
 Description: "An effective antibacterial hand sanitizer to keep hands clean and protect against germs, viruses, and bacteria while on the go."
},
{
 ID: 32,
 Medname: "Dandruff Control Shampoo",
 Image: "https://i.ibb.co/mzWDpCX/head-shoulders-anti-dandruff-lemon-fresh-shampoo-330ml.jpg",
 Price: 12.99,
 Category: "Personal Care",
 Company: "ScalpCare",
 Description: "A specialized shampoo for dandruff control, formulated to soothe the scalp, reduce flakes, and promote healthy hair and scalp."
},
{
 ID: 33,
 Medname: "Tea Tree Oil Acne Gel",
 Image: "https://i.ibb.co/NNJ0wGy/41-X8suo-FTj-L.jpg",
 Price: 9.99,
 Category: "Personal Care",
 Company: "ClearSkin",
 Description: "An acne gel enriched with tea tree oil to target and reduce acne, blemishes, and inflammation, promoting clear and healthy skin."
},
{
 ID: 34,
 Medname: "Sensitive Skin Moisturizer",
 Image: "https://i.ibb.co/HKnS3fX/pump-tc22o-front.jpg",
 Price: 15.99,
 Category: "Personal Care",
 Company: "GentleGlow",
 Description: "A gentle moisturizer specially designed for sensitive skin, providing hydration without irritation and promoting a soft and supple complexion."
},
{
 ID: 35,
 Medname: "Deodorant Wipes",
 Image: "https://i.ibb.co/Q70bFjL/612-r-WP4-Zx-L.jpg",
 Price: 6.99,
 Category: "Personal Care",
 Company: "FreshFeel",
 Description: "Convenient deodorant wipes for a quick and refreshing way to stay odor-free and feel clean throughout the day."
},
{
 ID: 36,
 Medname: "Veterinary Joint Supplement",
 Image: "https://i.ibb.co/tDZRCYN/71-Jz-Wee-VPg-L.jpg",
 Price: 29.99,
 Category: "Veterinary",
 Company: "AnimalCare",
 Description: "A veterinary-grade joint supplement specially formulated to promote joint health and mobility in animals."
},
{
 ID: 37,
 Medname: "Flea and Tick Control for Pets",
 Image: "https://i.ibb.co/gWmqh5t/3270015650-Hartz-Ultra-Guard-Dual-Action-Topical-Flea-Tick-Prevention-for-Dogs-and-Puppies-31-60lb-f.jpg",
 Price: 18.99,
 Category: "Veterinary",
 Company: "PetGuard",
 Description: "An effective veterinary solution for controlling fleas and ticks in pets, ensuring a healthy and pest-free environment."
},
{
 ID: 38,
 Medname: "Veterinary Digestive Health Supplement",
 Image: "https://i.ibb.co/tCqFHf4/images.jpg",
 Price: 14.99,
 Category: "Veterinary",
 Company: "VetWellness",
 Description: "A veterinary-grade supplement to support digestive health in pets, aiding in proper digestion and nutrient absorption."
},
{
 ID: 39,
 Medname: "Pet Dental Care Gel",
 Image: "https://i.ibb.co/sKQXg9q/d349ec791245ac2a0a8811f37dce24b5.jpg",
 Price: 19.99,
 Category: "Veterinary",
 Company: "PetCarePlus",
 Description: "A veterinary-approved gel formula designed to promote dental health and prevent dental issues in pets."
},
{
 ID: 40,
 Medname: "Veterinary Hairball Control Solution",
 Image: "https://i.ibb.co/n01BJ2g/Under-the-Weather-Hairball-Gel-for-Cats.png",
 Price: 26.99,
 Category: "Veterinary",
 Company: "DentalVet",
 Description: "An advanced veterinary solution to prevent and control hairballs in pets, promoting a healthy digestive system."
},
{
 ID: 41,
 Medname: "Intimacy Boost Elixir",
 Image: "https://i.ibb.co/xjsXp8C/images-2.jpg",
 Price: 29.99,
 Category: "Sexual Wellness",
 Company: "PassionHealth",
 Description: "An elixir designed to enhance intimacy, formulated with natural ingredients to support overall sexual wellness."
},
{
 ID: 42,
 Medname: "Libido Enhancer Capsules",
 Image: "https://i.ibb.co/b3dQ5QD/images-3.jpg",
 Price: 18.99,
 Category: "Sexual Wellness",
 Company: "DesireCare",
 Description: "Capsules crafted to boost libido and promote sexual vitality, supporting a healthy and satisfying intimate life."
},
{
 ID: 43,
 Medname: "Sensual Massage Oil",
 Image: "https://i.ibb.co/bgCfyVT/images-1.jpg",
 Price: 14.99,
 Category: "Sexual Wellness",
 Company: "HarmonyEssence",
 Description: "A sensual massage oil enriched with natural extracts, designed to create a relaxing and intimate atmosphere."
},
{
 ID: 44,
 Medname: "Passion Fruit Aphrodisiac Tea",
 Image: "https://i.ibb.co/vYb6Hz2/51-Yeoj-Y0la-L.jpg",
 Price: 19.99,
 Category: "Sexual Wellness",
 Company: "TeaDesire",
 Description: "A delightful aphrodisiac tea infused with passion fruit essence, promoting relaxation and heightened desire."
},
{
 ID: 45,
 Medname: "Enhanced Pleasure Condoms",
 Image: "https://i.ibb.co/HpZQCwq/48325-1.jpg",
 Price: 26.99,
 Category: "Sexual Wellness",
 Company: "SafePassion",
 Description: "Specialty condoms designed for enhanced pleasure and protection, ensuring a safe and enjoyable intimate experience."
},
{
 ID: 46,
 Medname: "Health Monitoring Device",
 Image: "https://i.ibb.co/4SrHcNx/b1c71e2dd4768ce268055d7c3ef61eb8.jpg",
 Price: 129.99,
 Category: "Device",
 Company: "TechWellness",
 Description: "An advanced health monitoring device that tracks vital signs and provides real-time health insights for better well-being."
},
{
 ID: 47,
 Medname: "Smart Pill Dispenser",
 Image: "https://i.ibb.co/3YxGSPT/Smart-Dispenser-pic.jpg",
 Price: 89.99,
 Category: "Device",
 Company: "PillTech",
 Description: "A smart pill dispenser designed to organize and dispense medications at the right time, ensuring medication adherence."
},
{
 ID: 48,
 Medname: "Portable Oxygen Concentrator",
 Image: "https://i.ibb.co/mcP1p3L/giant-209026.jpg",
 Price: 199.99,
 Category: "Device",
 Company: "OxygenPlus",
 Description: "A compact and portable oxygen concentrator for individuals needing supplemental oxygen, providing freedom and mobility."
},
{
 ID: 49,
 Medname: "Digital Thermometer",
 Image: "https://i.ibb.co/fMk9sdB/46475455e2b0afaa9283b3b3df6e1dab.jpg",
 Price: 19.99,
 Category: "Device",
 Company: "TechHealth",
 Description: "A digital thermometer with accurate temperature readings, suitable for home use and health monitoring."
},
{
 ID: 50,
 Medname: "Smart Inhaler",
 Image: "https://i.ibb.co/KzddsRS/download.jpg",
 Price: 149.99,
 Category: "Device",
 Company: "InhalerTech",
 Description: "A smart inhaler with connectivity features to help manage respiratory conditions, providing insights and reminders."
}


]

export default MedicineData