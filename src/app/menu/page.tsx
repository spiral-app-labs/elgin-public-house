import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Full menu at Elgin Public House — Angus beef burgers, Wagyu & Quad Burger, wings, craft sandwiches, salads, and more. Kitchen open 'til midnight every night.",
};

const menuData = {
  appetizers: {
    label: "Appetizers",
    tagline: "Start your meal right",
    items: [
      {
        name: "Bacon Cheddar & Chive Stuffed Tater Tots",
        desc: "Served with sour cream",
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=75",
      },
      {
        name: "Warm Garlic Buttered Soft Pretzel Bites",
        desc: "Served with mustard trio",
        img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&q=75",
      },
      {
        name: "Slider Trio",
        desc: "Choose combination of three, on Turano mini pretzel rolls",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=75",
      },
      {
        name: "Fajita Quesadilla",
        desc: "Grilled chicken, mushrooms, onions, bell peppers, chihuahua cheese on corn tortillas with guacamole and sour cream",
        img: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&q=75",
      },
      {
        name: "Wings",
        desc: "6 or 12 — Tequila Lime, Peach Jerk, BBQ, Busted Knee Hot Sauce, Garlic Parmesan, Mild or Hot Buffalo",
        img: "https://images.unsplash.com/photo-1608039829572-9b0ba7a91f24?w=400&q=75",
      },
      {
        name: "Buffalo Shrimp",
        desc: "Crispy breaded shrimp tossed in mild buffalo with ranch",
        img: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&q=75",
      },
      {
        name: "Cheese Curds",
        desc: "Beer battered in-house with bacon aioli",
        img: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&q=75",
      },
      {
        name: "Chicken Tenders",
        desc: "6 strips — Breaded chicken breast with choice of dressing",
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=75",
      },
      {
        name: "Fish & Chips Bites",
        desc: "Beer battered with spicy avocado ranch",
        img: "https://images.unsplash.com/photo-1579208030886-b1f5b6b6086d?w=400&q=75",
      },
      {
        name: "Portabella Strips",
        desc: "Beer battered with spicy ranch",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=75",
      },
      {
        name: "Baked Goat Cheese",
        desc: "In marinara with warm toasted pita",
        price: "$8.75",
        img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=75",
      },
      {
        name: "Margarita Shrimp",
        desc: "Pan-seared in margarita mix, garlic, cilantro, lime (GF)",
        price: "$9.75",
        img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=75",
      },
      {
        name: "Cajun Shrimp",
        desc: "Cajun seasoned, pan-seared in margarita mix (GF)",
        price: "$9.75",
        img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&q=75",
      },
      {
        name: "Chips and Salsa",
        desc: "Tri-colored corn chips with fire-roasted salsa",
        price: "$6.75",
        img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=75",
      },
      {
        name: "Chips & Guacamole",
        desc: "Fresh guac made to order",
        price: "$8.00",
        img: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=400&q=75",
      },
      {
        name: "Bruschetta",
        desc: "Toasted ciabatta, house-made bruschetta",
        price: "$8.75",
        img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=75",
      },
      {
        name: "Fried Pickles",
        desc: "Dill pickle spears with EPH horseradish thousand island",
        price: "$7.75",
        img: "https://images.unsplash.com/photo-1619221882266-c3eb7eedb2e4?w=400&q=75",
      },
      {
        name: "Pub Burgers",
        desc: "Three mini angus beef burgers with pickles and EPH horseradish thousand island",
        price: "$8.25",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=75",
      },
      {
        name: "Hummus Duo",
        desc: "Southwest black bean & eggplant with pita",
        price: "$7.75",
        img: "https://images.unsplash.com/photo-1637361973-1d80b900257c?w=400&q=75",
      },
    ],
  },
  soups: {
    label: "Soups",
    tagline: "Warm & comforting",
    items: [
      {
        name: "Soup of the Day",
        desc: "Ask your server for today's selection",
        price: "$4.50",
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=75",
      },
      {
        name: "Chicken Chili",
        desc: "Topped with cheddar, sour cream, green onion",
        price: "$4.75",
        img: "https://images.unsplash.com/photo-1612966809256-95c0b1a24de5?w=400&q=75",
      },
      {
        name: "Chili",
        desc: "Topped with cheddar, sour cream, green onion",
        price: "$4.75",
        img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=75",
      },
    ],
  },
  salads: {
    label: "Salads",
    tagline: "Fresh & crisp",
    items: [
      {
        name: "Pub Salad",
        price: "$4.25",
        desc: "House salad with fresh greens",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=75",
      },
      {
        name: "Chopped Salad",
        desc: "Mixed greens, cucumber, red onion, tomato, red pepper, egg, ham, turkey, swiss, cheddar",
        price: "$10.25",
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=75",
      },
      {
        name: "Spinach Salad",
        desc: "Baby spinach, mushrooms, bacon, sesame-thai, red pepper, egg, goat cheese",
        price: "$9.75",
        img: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&q=75",
      },
      {
        name: "Tuna Salad",
        price: "$8.25",
        desc: "Fresh tuna salad on a bed of greens",
        img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=75",
      },
      {
        name: "EPH Cobb Salad",
        desc: "Grilled chicken, grape tomato, dried sweet corn, couscous, bleu cheese, trail mix",
        price: "$10.95",
        img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=75",
      },
      {
        name: "Grilled Chicken Salad",
        price: "$9.75",
        desc: "Grilled chicken breast on mixed greens",
        img: "https://images.unsplash.com/photo-1604497181015-76590d828b75?w=400&q=75",
      },
      {
        name: "Grilled Ahi Salad",
        desc: "Ruby red ahi tuna, seared medium rare",
        price: "$14.00",
        img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=75",
      },
      {
        name: "Bruschetta Salad",
        desc: "Fresh mozzarella, diced prosciutto",
        price: "$10.95",
        img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&q=75",
      },
      {
        name: "The EPH Wedge",
        desc: "Grilled chicken, bacon, bleu cheese, onion crisps",
        price: "$10.95",
        img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&q=75",
      },
      {
        name: "The Wedge",
        price: "$7.50",
        desc: "Classic iceberg wedge salad",
        img: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&q=75",
      },
    ],
  },
  burgers: {
    label: "Burgers",
    tagline: "8oz Angus Beef on pretzel rolls, choice of side",
    note: "Substitute: Wagyu beef or Quad (Beef, Elk, Bison, Boar). Non-beef: Grilled Chicken, Fried Chicken, Beyond Patty",
    items: [
      {
        name: "Mac Daddy",
        desc: "Crispy pork belly, mac and cheese, fried jalapeños",
        img: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=75",
        featured: true,
      },
      {
        name: "Sweet Whiskey",
        desc: "Cheddar, lettuce, bourbon bacon caramelized onion mushroom sauce on brioche",
        img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=75",
      },
      {
        name: "French Onion",
        desc: "Gouda, gruyere, fontina, grilled onions, onion straws, onion kaiser, side of au jus",
        img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=75",
        featured: true,
      },
      {
        name: "BBQ Pork Belly",
        desc: "Sharp cheddar, BBQ glazed pork belly, onion straws, BBQ sauce",
        img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=75",
      },
      {
        name: "Breakfast Burger",
        desc: "Bacon, sharp cheddar, grilled onions, fried egg",
        img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=75",
      },
      {
        name: "Southwest",
        desc: "Pepperjack, guacamole, fresh jalapeños, pico de gallo",
        img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=75",
      },
      {
        name: "Black Bean Burger",
        desc: "Roasted bell peppers, corn, pico, chimichurri, feta",
        img: "https://images.unsplash.com/photo-1520072959219-c595e6cdc926?w=400&q=75",
      },
    ],
  },
  sandwiches: {
    label: "Sandwiches",
    tagline: "Choice of chips, fries, onion straws, soup or salad",
    items: [
      {
        name: "Buffalo Chicken",
        desc: "8oz fried chicken, buffalo, spicy slaw, fresh jalapeños, bleu cheese on brioche",
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=75",
      },
      {
        name: "Chicken Artichoke",
        desc: "Artichokes, roasted bell peppers, onions, provolone, pesto",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=75",
      },
      {
        name: "Brie & Apple",
        desc: "Creamy brie, Granny Smith apples, apricot jam",
        img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=75",
      },
      {
        name: "Steak Sandwich",
        desc: "Grilled ribeye on ciabatta, horseradish-dijon, caramelized onions, mixed greens",
        img: "https://images.unsplash.com/photo-1432139509613-5c4255a1d1f3?w=400&q=75",
        featured: true,
      },
      {
        name: "Cubano",
        desc: "Slow roasted pork, smoked ham, swiss, pickles, red onions, mustard, garlic aioli",
        img: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&q=75",
      },
      {
        name: "Fried Shrimp Po'Boy",
        desc: "8 jumbo shrimp, lettuce, tomato, red onion, dijon, garlic aioli on ciabatta",
        img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=75",
      },
      {
        name: "Turkey Club",
        desc: "Smoked turkey, bacon, swiss, honey-mustard on pretzel roll",
        img: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&q=75",
      },
      {
        name: "Pulled Pork",
        desc: "Slow roasted, onion straws, mild BBQ on pretzel roll",
        img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=75",
      },
    ],
  },
  pastas: {
    label: "Pastas",
    tagline: "Hearty & satisfying",
    items: [
      {
        name: "EPH Mac & Cheese",
        desc: "Corkscrew pasta in homemade cheese sauce",
        price: "$8.00",
        img: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&q=75",
      },
      {
        name: "Chipotle Penne",
        desc: "Diced chicken, garlic, cilantro, chipotle alfredo",
        price: "$14.95",
        img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=75",
      },
    ],
  },
  enhancements: {
    label: "Enhancements",
    tagline: "Make it your own",
    items: [
      { name: "Applewood Bacon", price: "$1.75", desc: "Smoky, thick-cut" },
      { name: "BBQ Pulled Pork", price: "$4.50", desc: "Slow-roasted" },
      { name: "Grilled Onions", price: "$0.75", desc: "Caramelized" },
      { name: "Green Chilis", price: "$0.75", desc: "Mild heat" },
      { name: "Extra Patty", price: "$4.50", desc: "8oz Angus beef" },
      { name: "Duck Bacon", price: "$4.50", desc: "Rich & savory" },
      { name: "Soft-Fried Egg", price: "$1.75", desc: "Runny yolk" },
      { name: "Sautéed Mushrooms", price: "$0.75", desc: "Tender & earthy" },
      { name: "Jalapeños", price: "$0.75", desc: "Fresh sliced" },
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
              sandwiches to hearty salads — all served until midnight, every
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
