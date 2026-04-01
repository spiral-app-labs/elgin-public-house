import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Full menu at Elgin Public House — Angus beef burgers, Wagyu & Quad Burger, wings, craft sandwiches, tacos, entrees, and more. Kitchen open 'til midnight every night.",
};

const menuData = {
  appetizers: {
    label: "Appetizers",
    tagline: "Start your meal right",
    items: [
      {
        name: "Loaded Tater Tots",
        desc: "Bacon cheddar and chive stuffed tater tots with sour cream",
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=75",
      },
      {
        name: "Pretzel Bites",
        desc: "Warm garlic buttered soft pretzel bites with mustard trio",
        img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&q=75",
      },
      {
        name: "Slider Sampler",
        desc: "Choose a combination of three, on Turano mini pretzel rolls",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=75",
      },
      {
        name: "Chicken Quesadillas",
        desc: "Grilled chicken, mushrooms, onions, bell peppers, chihuahua cheese on corn tortillas with house-made guacamole and sour cream",
        img: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&q=75",
      },
      {
        name: "Wings",
        desc: "6 or 12 count. Sauces: Tequila Lime, Peach Jerk, BBQ, Busted Knee Hot Sauce, Garlic Parmesan, Mild or Hot Buffalo",
        img: "https://images.unsplash.com/photo-1608039829572-9b0ba7a91f24?w=400&q=75",
      },
      {
        name: "Buffalo Shrimp",
        desc: "Crispy breaded shrimp tossed in mild buffalo with ranch",
        img: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&q=75",
      },
      {
        name: "Onion Rings",
        desc: "Beer battered in-house with bacon aioli",
        img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=75",
      },
      {
        name: "Chicken Strips",
        desc: "Six strips of breaded chicken breast with choice of dressing",
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=75",
      },
      {
        name: "Fried Pickles",
        desc: "Beer battered in-house with spicy avocado ranch",
        img: "https://images.unsplash.com/photo-1619221882266-c3eb7eedb2e4?w=400&q=75",
      },
      {
        name: "Cheese Curds",
        desc: "Beer battered in-house with spicy ranch",
        img: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&q=75",
      },
    ],
  },
  soups_salads: {
    label: "Soups & Salads",
    tagline: "Fresh & crisp",
    items: [
      {
        name: "Southwest Chicken Salad",
        desc: "Grilled chicken, avocado, pico, black bean-corn salsa, chihuahua cheese, tortilla strips, jalapeno vinaigrette",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=75",
      },
      {
        name: "Steakhouse Salad",
        desc: "Sliced ribeye, mixed greens, blue cheese, hard boiled egg, caramelized onions, tomatoes, homemade ranch",
        img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=75",
        featured: true,
      },
      {
        name: "Corned Beef Cobb",
        desc: "Corned beef, blue cheese, bacon, hardboiled egg, tomato, red onion, cucumber, cucumber vinaigrette",
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=75",
      },
      {
        name: "Mediterranean Salad",
        desc: "Chicken, feta, artichokes, Kalamata olives, cucumbers, tomatoes, red onions, oregano lemon vinaigrette",
        img: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&q=75",
      },
      {
        name: "Caesar Salad",
        desc: "Crispy romaine, shredded Parmesan, Caesar dressing, garlic croutons. Add protein.",
        img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=75",
      },
      {
        name: "Chef Salad",
        desc: "Mixed greens, cucumber, red onion, tomatoes, red peppers, hardboiled egg, ham, turkey, chihuahua cheese",
        img: "https://images.unsplash.com/photo-1604497181015-76590d828b75?w=400&q=75",
      },
      {
        name: "Homemade Soups",
        desc: "Three varieties, seasonal — ask your server for today's selections",
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=75",
      },
    ],
  },
  burgers: {
    label: "Burgers",
    tagline: "8oz Angus beef on pretzel roll, choice of side",
    note: "Premium Upgrades: Wagyu Beef or Quad (Beef, Elk, Bison, Boar). Non-Beef: Grilled Chicken, Fried Chicken, Beyond Patty. Sides: Fries, Chips, Onion Straws, Soup or Salad.",
    items: [
      {
        name: "The Pork Belly Mac",
        desc: "Crispy pork belly, creamy mac and cheese, fried jalapenos",
        img: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=75",
        featured: true,
      },
      {
        name: "Sweet Whiskey Burger",
        desc: "Cheddar, house-made sweet whiskey sauce (bourbon, applewood bacon, caramelized onions, mushrooms) on brioche",
        img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=75",
      },
      {
        name: "French Onion Burger",
        desc: "Smothered in gouda, gruyere and fontina cheeses, grilled onions, crispy onion straws on onion kaiser roll with au jus",
        img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=75",
        featured: true,
      },
      {
        name: "BBQ Pork Belly Burger",
        desc: "Sharp cheddar, BBQ glazed pork belly, onion straws, BBQ sauce",
        img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=75",
      },
      {
        name: "Sunrise Burger",
        desc: "Applewood smoked bacon, sharp cheddar, grilled onions, fried egg",
        img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=75",
      },
      {
        name: "Southwest Burger",
        desc: "Pepperjack, guacamole, fresh jalapenos, pico de gallo",
        img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=75",
      },
      {
        name: "Black Bean Burger",
        desc: "Homemade with roasted bell peppers and corn, pico, chimichurri, feta",
        img: "https://images.unsplash.com/photo-1520072959219-c595e6cdc926?w=400&q=75",
      },
    ],
  },
  sandwiches: {
    label: "Sandwiches",
    tagline: "Choice of chips, fries, onion straws, soup, or small salad",
    items: [
      {
        name: "Buffalo Chicken Sandwich",
        desc: "8oz breaded fried chicken, mild buffalo, spicy slaw, jalapenos, blue cheese on brioche",
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=75",
      },
      {
        name: "Artichoke Chicken Melt",
        desc: "Chicken, artichokes, roasted bell peppers, onions, provolone, pesto",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=75",
      },
      {
        name: "Brie & Apple",
        desc: "Creamy Brie, Granny Smith apples, apricot jam",
        img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=75",
      },
      {
        name: "Philly Steak",
        desc: "Grilled ribeye on ciabatta garlic bread, horseradish-dijon, caramelized onions, mixed greens",
        img: "https://images.unsplash.com/photo-1432139509613-5c4255a1d1f3?w=400&q=75",
      },
      {
        name: "Cubano",
        desc: "Slow roasted pork shoulder, smoked ham, swiss, pickles, red onions, whole grain mustard, garlic aioli",
        img: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&q=75",
      },
      {
        name: "Fried Shrimp Po'Boy",
        desc: "8 jumbo breaded shrimp, lettuce, tomato, red onion, dijon, garlic aioli on ciabatta",
        img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=75",
      },
      {
        name: "Turkey Club",
        desc: "Smoked turkey, applewood bacon, swiss, lettuce, tomato, honey-mustard on pretzel roll",
        img: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&q=75",
      },
      {
        name: "Pulled Pork",
        desc: "Slow roasted, onion straws, mild BBQ on pretzel roll",
        img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=75",
      },
      {
        name: "Triple Grilled Cheese",
        desc: "Provolone, American, chihuahua cheeses, tomatoes, bacon. Staff favorite! Add fried egg!",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=75",
        featured: true,
      },
      {
        name: "Loaded Philly",
        desc: "Grilled ribeye, sauteed onions, breaded fried potatoes, provolone, sour cream, bacon on caramelized onion bun",
        img: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?w=400&q=75",
      },
      {
        name: "Steak Melt",
        desc: "Thick cut sourdough, sliced filet, caramelized onions, American, chihuahua, tomatoes",
        img: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=400&q=75",
        featured: true,
      },
      {
        name: "BLT Deluxe",
        desc: "Double stacked with applewood bacon, white cheddar, American, sun-dried tomato mayo",
        img: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&q=75",
      },
      {
        name: "Cajun Chicken Wrap",
        desc: "Grilled adobo chicken, onions, jalapenos, andouille sausage, pepperjack, spicy ranch, mixed greens",
        img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=75",
      },
      {
        name: "Buffalo Chicken Wrap",
        desc: "Fried chicken in buffalo sauce, blue cheese crumbles, celery, tomatoes, mixed greens, ranch",
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&q=75",
      },
    ],
  },
  tacos: {
    label: "Tacos",
    tagline: "Handmade & bursting with flavor",
    items: [
      {
        name: "Fish Tacos",
        desc: "Sauteed East Coast cod, cabbage, pico, avocado, corn & black bean salsa, jalapeno vinaigrette",
        img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=75",
      },
      {
        name: "Pork Belly Tacos",
        desc: "Slow roasted pork belly, jalapeno-maple BBQ glaze, shaved cabbage, grilled peaches, chipotle pepper sauce",
        img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&q=75",
        featured: true,
      },
      {
        name: "Carnitas Tacos",
        desc: "Three shredded pork tacos with chihuahua cheese, cabbage, pico",
        img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=75",
      },
      {
        name: "Steak Tacos",
        desc: "Strip steak, grilled onions, refried beans, mixed greens, pico, lime crema",
        img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&q=75",
      },
    ],
  },
  entrees: {
    label: "Entrees",
    tagline: "Hearty plates, made from scratch",
    items: [
      {
        name: "Cajun Cod",
        desc: "East Coast cod fried with Cajun seasoning, fried brussel sprouts, crispy potatoes",
        img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&q=75",
      },
      {
        name: "Cajun Etouffee",
        desc: "New Orleans style with shrimp, chicken, andouille sausage over rice",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=75",
        featured: true,
      },
      {
        name: "Chimichurri Steak",
        desc: "Black Angus filet grilled, sliced, house chimichurri, teriyaki mushrooms, red potatoes",
        img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=75",
        featured: true,
      },
      {
        name: "Fried Catfish",
        desc: "Three beer-battered filets with fries and coleslaw",
        img: "https://images.unsplash.com/photo-1579208030886-b1f5b6b6086d?w=400&q=75",
      },
      {
        name: "Cajun Pasta",
        desc: "Rigatoni with andouille, tomatoes, feta in cajun cream sauce",
        img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=75",
      },
      {
        name: "Mac & Cheese",
        desc: "Cavatappi with homemade cheese sauce, crumbled bacon. Many add-ons available",
        img: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&q=75",
      },
    ],
  },
};

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div
          className="parallax-hero absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
              Elevated Pub Fare
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6">
              Our Menu
            </h1>
            <p className="text-cream/80 text-base sm:text-lg max-w-2xl mx-auto">
              From signature Angus burgers to exotic Quad patties, craft
              sandwiches to house-made tacos — all served until midnight, every
              night.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Upgrade Banner */}
      <section className="bg-copper/10 border-b border-copper/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
            <span className="text-copper font-bold text-sm uppercase tracking-wider">
              Premium Upgrades
            </span>
            <span className="text-navy/70 text-sm">
              Upgrade any burger to{" "}
              <span className="font-semibold text-navy">Wagyu Beef</span> or
              the legendary{" "}
              <span className="font-semibold text-navy">
                Quad (Beef, Elk, Bison &amp; Wild Boar)
              </span>
            </span>
          </div>
        </div>
      </section>

      <MenuClient menuData={menuData} />
    </>
  );
}
