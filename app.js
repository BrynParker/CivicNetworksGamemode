const rawSystems = [
  {
    title: "MafiaRP Core Framework",
    source: "Plugin",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/!!core",
    completion: 90,
    description: "Base gameplay framework changes that extend Helix for the MafiaRP rule set. It centralizes faction logic, hands behavior, shared hooks, language additions, and networked core utilities.",
    features: ["faction extensions", "hands weapon", "shared hooks", "network helpers", "language layer"],
    signals: "8 Lua files, core library code, weapon entity, small cleanup marker"
  },
  {
    title: "Staff Command Baton",
    source: "Plugin",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/adminstick_ix",
    completion: 88,
    description: "A staff tool for quick administrative actions inside the live server. It includes client UI, server command handling, and a weapon entity for in-world staff workflows.",
    features: ["admin weapon", "staff commands", "client panel", "server actions"],
    signals: "6 Lua files, client/server split, 10 network signals"
  },
  {
    title: "Admin Entity Vision",
    source: "Utility",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/admin_esp.lua",
    completion: 95,
    description: "An admin ESP overlay for quickly finding important Helix entities during moderation or setup. It is compact, self-contained, and focused on operational visibility.",
    features: ["ESP overlay", "entity labels", "staff visibility"],
    signals: "single complete utility file"
  },
  {
    title: "In-Character Application Terminals",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/applicationsystem",
    completion: 90,
    description: "Adds physical application terminals and acceptance paperwork so jobs, departments, or whitelist paths can be handled through immersive in-character interactions.",
    features: ["application terminal", "acceptance item", "staff review flow", "in-world paperwork"],
    signals: "5 Lua files, entity plus item, one minor polish marker"
  },
  {
    title: "Backpack and Container Inventory",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/bagsystem",
    completion: 96,
    description: "A finished bag inventory system with multiple backpack tiers and equipment pouches. It gives players meaningful carry-capacity progression without requiring admin intervention.",
    features: ["small backpack", "medium backpack", "large backpack", "camping pack", "ammo pouch"],
    signals: "9 Lua files, 5 bag items, no unfinished markers"
  },
  {
    title: "Advanced Staff Operations Suite",
    source: "Plugin",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/bastion",
    completion: 82,
    description: "A larger administrative extension package with command modules, context actions, staff panels, and server-side enforcement hooks. It is feature-rich but still shows several cleanup markers.",
    features: ["staff modules", "context menu", "commands", "networked panels"],
    signals: "14 Lua files, 31 network signals, 4 TODO/debug markers"
  },
  {
    title: "Database Staff Logs",
    source: "Plugin",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/betterlogs",
    completion: 94,
    description: "Stores server logs in a database and provides a searchable staff-facing viewer. This is a strong buyer-facing operations feature because it makes moderation auditable.",
    features: ["database logs", "staff lookup", "client viewer", "server hooks"],
    signals: "4 Lua files, clean implementation markers"
  },
  {
    title: "Prop Damage Protection",
    source: "Utility",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/blockpropdamage.lua",
    completion: 98,
    description: "A small protection rule that blocks prop killing and reduces accidental or malicious physics damage. It is narrow, direct, and production-ready.",
    features: ["prop kill prevention", "damage hook"],
    signals: "single focused utility file"
  },
  {
    title: "Bodygroup Customization Station",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/bodygroupmanager",
    completion: 88,
    description: "Lets players and staff adjust bodygroups through an in-world changer entity and supporting UI. It supports appearance customization without forcing manual staff edits.",
    features: ["bodygroup entity", "customization UI", "admin support", "server validation"],
    signals: "5 Lua files, 7 network signals, one minor marker"
  },
  {
    title: "Business Point-of-Sale Suite",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/business_misc",
    completion: 93,
    description: "Adds business cards, certifications, NPCs, and cash registers for player-run commerce. The system helps restaurants, shops, and fronts feel like real operations.",
    features: ["cash register", "business certification", "business cards", "merchant NPC"],
    signals: "12 Lua files, 2 entities, 3 items, 35 network signals"
  },
  {
    title: "Character Creation Experience",
    source: "Plugin",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/charcreation",
    completion: 82,
    description: "Customizes the first character creation flow with dedicated panels, model proxy handling, and shared client/server setup. Useful for making onboarding feel branded instead of stock Helix.",
    features: ["character UI", "model presentation", "server setup", "client panels"],
    signals: "8 Lua files, UI libraries, one polish marker"
  },
  {
    title: "Clearance and Access Control",
    source: "Plugin",
    category: "Police",
    path: "gamemodes/mafia_roleplay/plugins/clearanceaccess",
    completion: 92,
    description: "Overrides door and button behavior to support access clearance checks. It can power secured police, government, or faction facilities with rank-gated entry points.",
    features: ["retinal scanner support", "door access", "button overrides", "clearance levels"],
    signals: "3 Lua files, shared/client/server split"
  },
  {
    title: "Faction Command Menu",
    source: "Utility",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/cmd_factionmenu.lua",
    completion: 80,
    description: "A commander-facing faction menu for high-rank faction operations. The implementation has real networking and UI behavior, but the internal text suggests it needs copy cleanup before sale.",
    features: ["commander menu", "rank tools", "networked UI"],
    signals: "single file, 3 network signals, rough internal labels"
  },
  {
    title: "In-Game Computer Network",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/computers",
    completion: 78,
    description: "Interactive computer entities with programs, custom skinning, derma panels, networking libraries, and server/client plugin code. This is ambitious and valuable, but visible TODO markers make it a review target.",
    features: ["computer entity", "program framework", "custom UI skin", "network libraries", "in-world terminals"],
    signals: "30 Lua files, program folder, 10 TODO/debug markers"
  },
  {
    title: "Custom Crosshair",
    source: "Utility",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/crosshair.lua",
    completion: 96,
    description: "A compact crosshair replacement for a more consistent MafiaRP combat and interaction feel. It is narrow and complete.",
    features: ["HUD crosshair", "client drawing"],
    signals: "single focused utility file"
  },
  {
    title: "Detective Evidence Kit",
    source: "Plugin",
    category: "Police",
    path: "gamemodes/mafia_roleplay/plugins/detective",
    completion: 93,
    description: "Adds investigative roleplay items such as fingerprint pads, evidence paper, and gloves. It gives detectives tangible tools for case-building scenes.",
    features: ["fingerprint pad", "evidence paper", "gloves", "case roleplay"],
    signals: "4 Lua files, 3 items, 6 network signals"
  },
  {
    title: "Item Pickup Cooldowns",
    source: "Utility",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/dropdelay.lua",
    completion: 98,
    description: "Adds delay rules around dropping and retaking items. It helps prevent spam, duplication edge cases, and unrealistic inventory juggling.",
    features: ["drop delay", "pickup delay", "anti-spam"],
    signals: "single complete utility file"
  },
  {
    title: "Alias and False Identity System",
    source: "Utility",
    category: "Crime",
    path: "gamemodes/mafia_roleplay/plugins/fakenames.lua",
    completion: 93,
    description: "Lets players present a false name through the F3 interaction flow. This directly supports undercover scenes, criminal deception, and social engineering roleplay.",
    features: ["fake name action", "F3 integration", "identity deception", "network validation"],
    signals: "single file, 5 network signals"
  },
  {
    title: "Vendor Flag Requirements",
    source: "Utility",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/flagsforvendors.lua",
    completion: 94,
    description: "Extends vendor purchases so items can require player flags. This lets server owners gate licenses, black-market goods, police supplies, or faction-only commerce.",
    features: ["flag-gated purchases", "vendor checks", "permission enforcement"],
    signals: "single file, 2 network signals"
  },
  {
    title: "Player Organization Manager",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/groupmanager",
    completion: 94,
    description: "Allows players to create in-game organizations with names, roles, and group locks. It supports crews, companies, clubs, and private factions inside the wider city.",
    features: ["custom groups", "roles", "group lock item", "management UI"],
    signals: "9 Lua files, entity plus item, no unfinished markers"
  },
  {
    title: "GTA-Style Minimap",
    source: "Plugin",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/gtav_minimap",
    completion: 86,
    description: "Adds a GTA-inspired minimap presentation layer. It is a lightweight visual upgrade that pairs well with the larger map addon.",
    features: ["minimap UI", "map panel"],
    signals: "2 Lua files, no unfinished markers"
  },
  {
    title: "Mask and Identity Concealment",
    source: "Plugin",
    category: "Crime",
    path: "gamemodes/mafia_roleplay/plugins/hiddenmask",
    completion: 96,
    description: "Provides wearable masks that hide character identity. It is a core criminal roleplay feature for robberies, hits, and anonymous street activity.",
    features: ["mask items", "identity hiding", "criminal scenes"],
    signals: "3 Lua files, 2 items, clean markers"
  },
  {
    title: "Custom Main Menu and Helix UI",
    source: "Plugin",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/hl2-interface",
    completion: 80,
    description: "A broad UI replacement covering menus, character screens, inventory, scoreboard, storage, quiz panels, settings, and main-menu management. The breadth is excellent, but several TODOs suggest final polish is still needed.",
    features: ["main menu", "character UI", "inventory UI", "scoreboard", "quiz editor", "settings"],
    signals: "38 Lua files, 44 network signals, 7 TODO/debug markers"
  },
  {
    title: "Vehicle Hotwire Gameplay",
    source: "Plugin",
    category: "Crime",
    path: "gamemodes/mafia_roleplay/plugins/hotwire",
    completion: 94,
    description: "Adds a wire-cutter item and hotwire interaction flow for stealing or starting vehicles. It ties naturally into car ownership, police response, and theft roleplay.",
    features: ["wire cutter", "vehicle ignition", "crime interaction", "UI prompt"],
    signals: "3 Lua files, item, 9 network signals"
  },
  {
    title: "Item Icon Studio",
    source: "Plugin",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/iconeditor",
    completion: 95,
    description: "A better icon editor for creating polished item visuals directly inside the gamemode workflow. This helps maintain a consistent marketplace and inventory presentation.",
    features: ["icon editor", "item visuals", "admin tooling"],
    signals: "3 Lua files, complete UI utility"
  },
  {
    title: "Equipment Slot System",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/inventoryslots",
    completion: 87,
    description: "Adds equip slots to player inventory behavior so items can be worn or assigned more cleanly. It supports clothes, accessories, armor, and other persistent character gear.",
    features: ["equipment slots", "inventory override", "client UI", "server sync"],
    signals: "4 Lua files, 13 network signals"
  },
  {
    title: "Property Key Ownership",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/keys",
    completion: 76,
    description: "Handles property keys, key sharing, and lock ownership against specific properties. It has substantial functionality, but debug prints and rough server messages make it a QA priority.",
    features: ["house keys", "key sharing", "property locks", "ownership persistence"],
    signals: "7 Lua files, entity plus item, 12 network signals, 4 debug markers"
  },
  {
    title: "Liquid Container Framework",
    source: "Plugin",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/liquids",
    completion: 88,
    description: "A reusable liquid-tracking library for sources, containers, metadata, and editor UI. It underpins alcohol, beverages, and other resource-transfer systems.",
    features: ["liquid sources", "container metadata", "liquid editor", "language support", "shared library"],
    signals: "27 Lua files, entity plus base item, 11 network signals"
  },
  {
    title: "General Event Logging",
    source: "Utility",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/logging.lua",
    completion: 93,
    description: "Configurable logging text and lists for common server events. It is a practical companion to the larger database log viewer.",
    features: ["server logs", "configurable lists", "moderation support"],
    signals: "single complete utility file"
  },
  {
    title: "In-Server Alcohol Production",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_alcohol_production",
    completion: 95,
    description: "A deep brewing and distilling system with grinders, breweries, barrels, recipes, ingredients, and finished bottles. It supports legitimate business, speakeasy scenes, and crafting progression.",
    features: ["brewery", "grinder", "beer recipes", "wine", "spirits", "barrels", "ingredient chain"],
    signals: "42 Lua files, 2 entities, many finished drink items, 35 network signals"
  },
  {
    title: "ArcCW Weapon Integration",
    source: "Plugin",
    category: "Integration",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_arccw_integration",
    completion: 84,
    description: "Compatibility layer for ArcCW weapons and magazine behavior. It keeps firearm systems aligned with the gamemode's inventory and roleplay rules.",
    features: ["ArcCW support", "magazine handling", "weapon compatibility"],
    signals: "single shared plugin file"
  },
  {
    title: "Placeable Construction System",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_building_sys",
    completion: 96,
    description: "Turns inventory items into placeable world entities through construction plans and deployable objects. It powers player-built operations such as workbenches, drying sheds, lamps, chairs, and production stations.",
    features: ["build plans", "placeable items", "workbench", "drying stations", "brewing props", "cash register"],
    signals: "28 Lua files, 12 placeable items, no unfinished markers"
  },
  {
    title: "Clothing, Jewelry, and Wardrobes",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_clothing",
    completion: 92,
    description: "A large clothing shop and wardrobe system with outfits, hats, jewelry, backpacks, watches, accessories, NPC sellers, and PAC data support. This is one of the strongest lifestyle pillars in the package.",
    features: ["clothing store", "wardrobe", "jewelry", "accessories", "outfit items", "seller NPC"],
    signals: "70 Lua files, 3 entities, extensive item catalog"
  },
  {
    title: "Cocaine Production Chain",
    source: "Plugin",
    category: "Crime",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_cocaine",
    completion: 87,
    description: "A multi-step cocaine pipeline with coca seeds, pots, leaves, drying tables, processors, lamps, batteries, bricks, and bagging. The gameplay loop is broad, but debug output should be cleaned before sale.",
    features: ["coca plants", "drying table", "processor", "lamps", "bagging", "bricks"],
    signals: "28 Lua files, 4 entities, 8 items, 31 network signals"
  },
  {
    title: "Workbench Crafting Framework",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_crafting",
    completion: 92,
    description: "A robust crafting framework with stations, recipes, components, queue logic, derma UI, item metadata, and language support. It can produce legal goods, contraband, weapons, or faction tools.",
    features: ["crafting station", "recipes", "materials", "queueing", "crafting UI", "weapon parts"],
    signals: "29 Lua files, entity, recipes, 21 network signals"
  },
  {
    title: "DarkRP Compatibility Layer",
    source: "Plugin",
    category: "Integration",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_darkrp_wrapper",
    completion: 82,
    description: "A compatibility shim for addons that expect DarkRP-style APIs. It is valuable because several marketplace addons assume DarkRP primitives even when running inside Helix.",
    features: ["DarkRP API bridge", "addon compatibility"],
    signals: "single shared compatibility file"
  },
  {
    title: "Faction Capture and Rank Management",
    source: "Plugin",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_faction_management",
    completion: 83,
    description: "Adds faction tables, ranks, shops, capture points, and shipment workflows. The core is substantial, but an in-code WIP note indicates at least one delivery entity flow needs finishing.",
    features: ["capture point", "faction ranks", "faction shop", "shipments", "rank UI"],
    signals: "21 Lua files, 3 entities, one WIP marker"
  },
  {
    title: "Helix Framework Enhancements",
    source: "Plugin",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_framework_edits",
    completion: 84,
    description: "A bundle of framework-level edits, item bases, commands, metadata changes, and reusable UI panels. It supports consumables, liquid containers, openable items, and other cross-system behaviors.",
    features: ["item bases", "consumables", "commands", "metadata", "utility panels"],
    signals: "28 Lua files, 5 base items, 2 TODO/debug markers"
  },
  {
    title: "Cellar-Style Premium Interface",
    source: "Plugin",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_gui",
    completion: 72,
    description: "A custom animated UI package for menus, scoreboard, settings, help, plugins, classes, and character cards. It has strong visual ambition but contains test commands and debug naming that should be cleaned.",
    features: ["animated menu", "scoreboard", "settings", "character card", "custom fonts"],
    signals: "20 Lua files, 3 network signals, 3 visible test/debug markers"
  },
  {
    title: "State Identification Cards",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_identification",
    completion: 94,
    description: "Adds physical identification card items for character verification. It gives police, banks, businesses, and property workflows a shared identity prop.",
    features: ["ID card item", "character verification", "civic roleplay"],
    signals: "2 Lua files, item included"
  },
  {
    title: "Lockpicking Minigame",
    source: "Plugin",
    category: "Crime",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_lockpicking",
    completion: 91,
    description: "A lockpicking system with bobby pin items, attribute support, client UI, language files, and server hooks. It rounds out burglary and vehicle theft gameplay.",
    features: ["bobby pins", "lockpick UI", "skill attribute", "server checks", "language support"],
    signals: "12 Lua files, item and UI folders"
  },
  {
    title: "Meth Cooking Chain",
    source: "Plugin",
    category: "Crime",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_meth",
    completion: 94,
    description: "A complete meth production loop with chemicals, stove, pot, freezer, trays, pipes, bags, recipes, and protective gear. It provides another major illegal economy pillar.",
    features: ["stove", "pot", "freezer", "chemicals", "trays", "pipes", "bagging"],
    signals: "29 Lua files, 3 entities, 12 items, 28 network signals"
  },
  {
    title: "Cinematic Item Pickup View",
    source: "Plugin",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_newitem_view",
    completion: 78,
    description: "Adds a Resident Evil-inspired item pickup presentation. The idea is appealing, but internal copy needs cleanup before being shown to buyers or server operators.",
    features: ["pickup overlay", "item reveal", "networked trigger"],
    signals: "3 Lua files, 3 network signals, rough internal description"
  },
  {
    title: "Modern Notification Toasts",
    source: "Plugin",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_notifications",
    completion: 90,
    description: "Replaces stock notifications with a cleaner custom notification panel. It gives player feedback a more modern and branded feel.",
    features: ["toast UI", "networked notices", "custom derma"],
    signals: "2 Lua files, 3 network signals"
  },
  {
    title: "Oil Rush Persistence Bridge",
    source: "Plugin",
    category: "Integration",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_oil_system",
    completion: 91,
    description: "Persists oil production entities and restores them across restarts. This ties the external OilRush addon into the long-term MafiaRP economy.",
    features: ["oil entity saves", "restart restore", "pipe segment item"],
    signals: "3 Lua files, item plus server plugin"
  },
  {
    title: "Ranked Police Armory",
    source: "Plugin",
    category: "Police",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_police_armory",
    completion: 94,
    description: "A role-based police armory with rank and flag restrictions. It gives departments controlled access to equipment without manual distribution.",
    features: ["armory entity", "rank gates", "flag gates", "equipment UI"],
    signals: "6 Lua files, entity, 13 network signals"
  },
  {
    title: "Police CAD, Evidence, and Jail System",
    source: "Plugin",
    category: "Police",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_police_system",
    completion: 88,
    description: "A major police gameplay suite with laptops, case files, charges, evidence, garages, lockers, prisoner beds, department equipment, tickets, radio items, and HUD overlays.",
    features: ["CAD laptop", "case files", "charges", "evidence", "jail beds", "garages", "lockers", "tickets"],
    signals: "60 Lua files, 8 entities, 12 items, 94 network signals"
  },
  {
    title: "Real Estate and Deeds",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_property_system",
    completion: 92,
    description: "A property ownership system with NPC interaction, deed items, rent and preview panels, and server-side property persistence. It is a core city economy feature.",
    features: ["property NPC", "deed item", "rent UI", "preview UI", "ownership persistence"],
    signals: "17 Lua files, NPC entity, deed item"
  },
  {
    title: "Radial Interaction Menu",
    source: "Plugin",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_radial_menu",
    completion: 90,
    description: "A radial interaction UI for common player actions such as frisking, giving money, and contextual choices. It makes repeated roleplay interactions faster and cleaner.",
    features: ["radial menu", "frisk flow", "give money", "interaction UI"],
    signals: "9 Lua files, third-party radial helper"
  },
  {
    title: "Handheld Radio Communications",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_radio",
    completion: 91,
    description: "Adds handheld radio equipment for in-character communication. It complements the phone system and gives organizations a more grounded comms layer.",
    features: ["radio item", "voice comms", "organization use"],
    signals: "2 Lua files, item, 2 network signals"
  },
  {
    title: "Tobacco Growing and Processing",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_tobacco",
    completion: 94,
    description: "A complete tobacco loop with seeds, pots, leaves, drying racks, processors, cigarette packaging, and loose tobacco. It offers a legal or gray-market production path.",
    features: ["tobacco seeds", "growing pot", "drying rack", "processor", "packaging"],
    signals: "18 Lua files, 3 entities, 4 items, 23 network signals"
  },
  {
    title: "Custom Vendor Marketplace",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/mafiarp_vendors",
    completion: 78,
    description: "A custom vendor entity with editor panels, debit modes, legacy UI, and third-party helpers. It is important for shops, but TODO/debug markers suggest it needs polish.",
    features: ["vendor entity", "vendor editor", "debit mode", "shop UI"],
    signals: "11 Lua files, 23 network signals, 7 TODO/debug markers"
  },
  {
    title: "Roleplay Utility Bundle",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/miscellaneous",
    completion: 91,
    description: "A bundle of practical roleplay items and systems such as dealers, blindfolds, zip ties, prepaid phones, key sharing, and character metadata helpers.",
    features: ["dealer NPC", "blindfolds", "zip ties", "prepaid phone", "key sharing"],
    signals: "18 Lua files, entity plus 3 items, 20 network signals"
  },
  {
    title: "Character-Scoped Vehicle Ownership",
    source: "Plugin",
    category: "Integration",
    path: "gamemodes/mafia_roleplay/plugins/modercardealer_compat",
    completion: 94,
    description: "Overrides Modern Car Dealer ownership to bind vehicles to character IDs instead of SteamID64. This is essential for multi-character roleplay economies.",
    features: ["vehicle ownership override", "character ID storage", "MCD bridge"],
    signals: "3 Lua files, 2 network signals"
  },
  {
    title: "Modern Player HUD",
    source: "Plugin",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/modern_hud",
    completion: 88,
    description: "A replacement HUD layer for cleaner health, status, and player feedback presentation. It helps the server feel less stock and more custom.",
    features: ["HUD replacement", "client UI"],
    signals: "2 Lua files, client/shared split"
  },
  {
    title: "Extended Item Actions",
    source: "Plugin",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/nockich_extended_items",
    completion: 93,
    description: "Adds reusable item action bases such as placeable items, usable-on-entity items, and combine actions. Many production and crafting systems depend on this style of item interaction.",
    features: ["place action", "use-on-entity", "combine items", "item base"],
    signals: "5 Lua files, 3 base items"
  },
  {
    title: "Nokia Phones, Payphones, and Media",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/nokia_phone",
    completion: 91,
    description: "A dense communications and flavor system with Nokia phones, payphones, CDs, bug devices, burner tools, messaging panels, and music/media interactions.",
    features: ["Nokia phone", "payphone", "CD items", "bug device", "messages", "phone UI"],
    signals: "25 Lua files, payphone entity, many items, 32 network signals"
  },
  {
    title: "Operations Control Center",
    source: "Plugin",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/ops",
    completion: 84,
    description: "A large operations package with reporting, staff management, event management, snapshots, user reports, and net monitoring. It is powerful, but broad enough to deserve targeted QA.",
    features: ["reports", "staff manager", "event manager", "snapshots", "net monitor", "ban list"],
    signals: "43 Lua files, 87 network signals, 2 polish markers"
  },
  {
    title: "Client Performance Options",
    source: "Plugin",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/performance",
    completion: 95,
    description: "Adds clientside settings that let players tune performance. This is useful for retaining players with lower-end machines on content-heavy servers.",
    features: ["graphics options", "performance toggles", "client hooks"],
    signals: "4 Lua files, no unfinished markers"
  },
  {
    title: "Permanent Entity Removal",
    source: "Utility",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/permaremove.lua",
    completion: 91,
    description: "A staff utility for permanently removing unwanted map or spawned entities. It assists with live server cleanup and map customization.",
    features: ["perma remove", "staff cleanup", "entity persistence"],
    signals: "single utility file"
  },
  {
    title: "Permanent Kill State Tracker",
    source: "Utility",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/pkactive.lua",
    completion: 90,
    description: "Tracks permanent-kill active state for moderation and roleplay enforcement. It is small but important for serious RP policy support.",
    features: ["PK status", "staff enforcement", "roleplay policy"],
    signals: "single utility file"
  },
  {
    title: "Physical Playing Cards",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/playingcards",
    completion: 94,
    description: "Adds item-based playing cards that support table games like blackjack and poker. It is a small but strong social roleplay feature.",
    features: ["card deck", "card base", "blackjack support", "poker support"],
    signals: "4 Lua files, 3 card items"
  },
  {
    title: "Casino Furniture Items",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/prp_casino",
    completion: 68,
    description: "Adds casino table and machine items for blackjack, roulette, slots, and wheel slots. It is promising as a placement catalog, but TODO markers suggest the gameplay layer is not fully finished here.",
    features: ["blackjack table", "roulette table", "slot machine", "wheel slot"],
    signals: "5 Lua files, 4 items, 4 TODO markers"
  },
  {
    title: "Next-Generation UI Experiments",
    source: "Plugin",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/prp_ui",
    completion: 62,
    description: "A newer UI package with buttons, intro screens, death screens, select controls, fade text, and panels. It appears experimental and should be treated as active development rather than finished polish.",
    features: ["intro UI", "death screen", "buttons", "select controls", "fade text"],
    signals: "8 Lua files, 9 network signals, 16 TODO/test/debug markers"
  },
  {
    title: "Realistic Banking and Heists",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/realistic_bank",
    completion: 89,
    description: "A banking system with ATMs, debit cards, deposit boxes, safes, corrupt NPCs, drills, money stacks, monitors, and account management panels. It supports both civic finance and criminal robbery scenes.",
    features: ["ATM", "bank NPC", "debit cards", "safe", "drills", "deposit boxes", "accounts"],
    signals: "43 Lua files, 8 entities, 3 items, 7 network signals"
  },
  {
    title: "Real-Time Lighting Bridge",
    source: "Plugin",
    category: "Integration",
    path: "gamemodes/mafia_roleplay/plugins/rtl",
    completion: 93,
    description: "Implements lighting transitions compatible with Simple Weather and StormFox2. It strengthens the atmospheric layer without adding much operational complexity.",
    features: ["real-time lighting", "weather integration", "client effects"],
    signals: "3 Lua files, clean markers"
  },
  {
    title: "Database Entity Persistence",
    source: "Plugin",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/saveents",
    completion: 94,
    description: "Saves selected entities into the database and recreates them later. This supports persistent shops, world props, production stations, and admin-placed content.",
    features: ["entity saving", "database records", "restart restore"],
    signals: "3 Lua files, persistence library"
  },
  {
    title: "Cannabis Cultivation and Processing",
    source: "Plugin",
    category: "Crime",
    path: "gamemodes/mafia_roleplay/plugins/seteroian_weed",
    completion: 94,
    description: "A full cannabis economy with seeds, fertilizer, water, pots, tents, plants, drying racks, jars, bricks, buds, and blunts. It is one of the stronger underground production systems.",
    features: ["weed seeds", "plant pot", "growing tent", "drying tent", "jars", "bricks", "blunts"],
    signals: "33 Lua files, 4 entities, 12 items, 18 network signals"
  },
  {
    title: "Fishing Leisure Loop",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/setorian_fishing_system",
    completion: 93,
    description: "Adds fishing rods, bait, and hook entities for a low-stakes legal leisure loop. It creates peaceful downtime between crime and faction conflict.",
    features: ["fishing rod", "bait", "hook entity", "sellable catch loop"],
    signals: "7 Lua files, weapon plus entity"
  },
  {
    title: "Psychedelics Production",
    source: "Plugin",
    category: "Crime",
    path: "gamemodes/mafia_roleplay/plugins/setorian_phychodelics",
    completion: 92,
    description: "Adds mushrooms, LSD-style blotter workflows, flasks, boxes, refrigerators, spores, substrate, and chemical ingredients. It broadens the illegal economy beyond standard drug loops.",
    features: ["mushrooms", "blotter sheets", "flask", "chemicals", "spores", "substrate"],
    signals: "30 Lua files, 4 entities, 12 items"
  },
  {
    title: "Automatic Staff Character Provisioning",
    source: "Utility",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/sh_auto_staff_char.lua",
    completion: 94,
    description: "Automatically creates and equips staff characters for admin ranks through SAM integration. It reduces onboarding friction for moderators.",
    features: ["staff character", "SAM ranks", "auto equip"],
    signals: "single file, 2 network signals"
  },
  {
    title: "First-Person Body Hands",
    source: "Utility",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/sh_bodymodel_hands.lua",
    completion: 92,
    description: "Replaces viewmodel hands with the player's current body model hands. It improves immersion for clothing and model-heavy roleplay.",
    features: ["viewmodel hands", "model matching", "immersion"],
    signals: "single complete utility file"
  },
  {
    title: "Timed Action Bars",
    source: "Utility",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/sh_civic_actions.lua",
    completion: 90,
    description: "Provides Payday-style action bars for timed interactions. This supports lockpicking, crafting, searching, processing, and other deliberate actions.",
    features: ["action progress", "timed interactions", "network sync"],
    signals: "single file, 2 network signals"
  },
  {
    title: "Casino Ownership and House Profit",
    source: "Utility",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/sh_civic_casino_ownership.lua",
    completion: 94,
    description: "Supports multiple casino areas with character owners and house profits paid into the correct bank account. This is a strong high-value business feature.",
    features: ["casino owners", "house profits", "bank payouts", "multi-area support"],
    signals: "single file, 5 network signals"
  },
  {
    title: "Collision Rule Handler",
    source: "Utility",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/sh_collisions.lua",
    completion: 92,
    description: "Handles collision behavior between entities to reduce unwanted physics interactions. It is a background stability feature for crowded roleplay servers.",
    features: ["collision rules", "entity safety", "physics control"],
    signals: "single complete utility file"
  },
  {
    title: "Configurable Keybind Menu",
    source: "Utility",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/sh_keybind_menu.lua",
    completion: 93,
    description: "Adds a settings-menu keybind selector with available key dropdowns. It helps players customize frequently used MafiaRP interactions.",
    features: ["keybind setting", "dropdown UI", "client options"],
    signals: "single complete utility file"
  },
  {
    title: "Account-Level Player Flags",
    source: "Utility",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/sh_playerflags.lua",
    completion: 93,
    description: "Lets flags be assigned to players instead of only individual characters. This is useful for trust levels, donor capabilities, and account-wide permissions.",
    features: ["player flags", "permission storage", "admin controls"],
    signals: "single complete utility file"
  },
  {
    title: "Discord-Approved Warrant RCON",
    source: "Utility",
    category: "Police",
    path: "gamemodes/mafia_roleplay/plugins/sh_rcon_warrants.lua",
    completion: 90,
    description: "Allows server console or Discord-mediated approval to mark players wanted. It connects out-of-game command authority with in-game law enforcement state.",
    features: ["warrants", "RCON command", "Discord workflow"],
    signals: "single complete utility file"
  },
  {
    title: "Global Model Animation Class Setter",
    source: "Utility",
    category: "Core",
    path: "gamemodes/mafia_roleplay/plugins/sh_setmodelclass_all.lua",
    completion: 78,
    description: "A tiny compatibility helper for assigning animation classes to player models. It is useful but too narrow and lightly documented to market as a major system.",
    features: ["model class", "animation support"],
    signals: "small single file"
  },
  {
    title: "Weapon Selection Hotbar",
    source: "Utility",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/sh_wepselect.lua",
    completion: 93,
    description: "Adds a custom weapon hotbar with optional scroll-wheel toggling. It modernizes the moment-to-moment feel of weapons and tools.",
    features: ["weapon hotbar", "scroll toggle", "HUD UI"],
    signals: "single file, 2 network signals"
  },
  {
    title: "Smoking and Lighter Items",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/smokables",
    completion: 94,
    description: "Adds cigarettes, cigars, lighters, and supporting item bases. It is a small but flavorful social RP system that pairs with tobacco production.",
    features: ["cigarettes", "cigars", "lighters", "smokable base"],
    signals: "9 Lua files, 5 items"
  },
  {
    title: "Smuggler NPC and Pickup Caches",
    source: "Plugin",
    category: "Crime",
    path: "gamemodes/mafia_roleplay/plugins/smuggler",
    completion: 80,
    description: "Adds black-market smuggler NPCs and pickup cache locations. It has editor UI, networking, hooks, and entities, but several TODO/debug markers need cleanup.",
    features: ["smuggler NPC", "pickup cache", "black-market editor", "hidden deliveries"],
    signals: "13 Lua files, 2 entities, 32 network signals, 7 TODO/debug markers"
  },
  {
    title: "Spawnmenu Item Browser",
    source: "Plugin",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/spawnmenu_itemlist",
    completion: 94,
    description: "Adds a Q-menu item browser for all registered items. It is a convenient setup and admin browsing tool for a large content library.",
    features: ["Q-menu tab", "item search", "admin spawn browsing"],
    signals: "3 Lua files, 7 network signals"
  },
  {
    title: "Spawnmenu Access Restriction",
    source: "Utility",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/spawnmenu_restriction.lua",
    completion: 94,
    description: "Restricts spawnmenu and context menu access to appropriate users. It is simple but important for public server control.",
    features: ["spawnmenu restriction", "context menu restriction", "permission checks"],
    signals: "single focused utility file"
  },
  {
    title: "Temporary Permission Flags",
    source: "Utility",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/tempflags.lua",
    completion: 94,
    description: "Gives players flags that expire after a configured duration. This is useful for trials, events, temporary whitelist access, and staff-managed exceptions.",
    features: ["temporary flags", "expiry timing", "admin control"],
    signals: "single complete utility file"
  },
  {
    title: "Third-Person Camera Toggle",
    source: "Utility",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/thirdperson_keybind.lua",
    completion: 90,
    description: "Adds a keybind for third-person camera behavior. It improves cinematic roleplay and character outfit visibility.",
    features: ["third-person toggle", "camera controls", "keybind"],
    signals: "single complete utility file"
  },
  {
    title: "Vehicle Trunk Storage",
    source: "Utility",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/trunk.lua",
    completion: 91,
    description: "Adds vehicle equipment or storage menu interactions. It helps vehicles become practical assets rather than purely cosmetic transport.",
    features: ["vehicle trunk", "equipment menu", "storage interaction"],
    signals: "single complete utility file"
  },
  {
    title: "Broadcast Television System",
    source: "Plugin",
    category: "Lifestyle",
    path: "gamemodes/mafia_roleplay/plugins/tv_system",
    completion: 82,
    description: "Adds televisions, large TVs, remotes, cameras, channels, broadcast networking, and channel UI. It is a standout social feature, but several markers indicate polish work remains.",
    features: ["TV entity", "large TV", "TV remote", "broadcast camera", "channels", "viewer UI"],
    signals: "24 Lua files, 2 entities, 2 items, 30 network signals"
  },
  {
    title: "Offline Character Administration",
    source: "Utility",
    category: "Admin",
    path: "gamemodes/mafia_roleplay/plugins/ui_remove_block_unblock_characters.lua",
    completion: 93,
    description: "Lets staff remove, block, or unblock characters even when they are not actively loaded. It is an important moderation and account-support feature.",
    features: ["offline remove", "offline block", "offline unblock", "staff UI"],
    signals: "single file, 10 network signals"
  },
  {
    title: "Item Pickup Animation",
    source: "Utility",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/vmanippickup.lua",
    completion: 90,
    description: "Plays a viewmodel animation when picking up items. It gives inventory interactions a more tactile, premium feel.",
    features: ["pickup animation", "viewmodel feedback", "network trigger"],
    signals: "single file, 3 network signals"
  },
  {
    title: "Voice Activity Overlay",
    source: "Utility",
    category: "UI",
    path: "gamemodes/mafia_roleplay/plugins/voice.lua",
    completion: 90,
    description: "Adds or adjusts voice overlay behavior so players can better understand who is speaking in active scenes.",
    features: ["voice overlay", "speaker feedback", "HUD integration"],
    signals: "single complete utility file"
  },
  {
    title: "Persistent Storage Containers",
    source: "Plugin",
    category: "Economy",
    path: "gamemodes/mafia_roleplay/plugins/willardcontainers",
    completion: 94,
    description: "Adds customizable item containers for persistent storage. This supports stash houses, businesses, personal storage, and admin-placed world containers.",
    features: ["container entity", "item storage", "custom properties", "server hooks"],
    signals: "6 Lua files, container entity, 5 network signals"
  },
  {
    title: "GTA-Style World Map Addon",
    source: "Addon",
    category: "UI",
    path: "addons/civic_map_system",
    completion: 84,
    description: "A map and HUD addon with shared options, server loading, and GTA-style minimap behavior. It provides world navigation and visual polish for a city server.",
    features: ["map HUD", "minimap", "shared options", "server sync"],
    signals: "30 Lua files, 41 network signals, several debug markers"
  },
  {
    title: "Prop Protection Addon",
    source: "Addon",
    category: "Admin",
    path: "addons/civic_prop_protection",
    completion: 93,
    description: "A prop protection layer with ownership checks, settings, and database support. It is essential infrastructure for any public build-heavy roleplay server.",
    features: ["prop ownership", "permission checks", "database support", "admin settings"],
    signals: "16 Lua files, MySQL helper, clean markers"
  },
  {
    title: "3D2D Clothing Clipping Interface",
    source: "Addon",
    category: "Lifestyle",
    path: "addons/clipping_3d2d",
    completion: 77,
    description: "Clientside clothing and clipping UI for visual adjustment workflows. It has a lot of interface code, but a test command and load print should be cleaned before presentation.",
    features: ["3D2D clothing UI", "clipping tools", "client handlers"],
    signals: "3 Lua files, test command present"
  },
  {
    title: "Standalone Drug Production Pack",
    source: "Addon",
    category: "Crime",
    path: "addons/drug_systems",
    completion: 90,
    description: "A large standalone addon containing drug entities for weed, psychedelics, chemicals, fans, lamps, water, and production props. It backs up or complements the custom MafiaRP drug plugins.",
    features: ["chemical entities", "weed entities", "psychedelic props", "production equipment"],
    signals: "139 Lua files, many entities, few unfinished markers"
  },
  {
    title: "Radial Wheel UI Library",
    source: "Addon",
    category: "UI",
    path: "addons/luctus_wheel",
    completion: 88,
    description: "A radial wheel UI addon used for quick action selection. It is compact and useful, with only minor console noise to clean.",
    features: ["radial wheel", "client menu", "action selection"],
    signals: "2 Lua files, 29 network references"
  },
  {
    title: "Premium Alcohol Brewery Addon",
    source: "Addon",
    category: "Economy",
    path: "addons/mafiarp_alcohol_brewery",
    completion: 74,
    description: "A model-and-entity-heavy alcohol brewing addon with barrels, presses, distilleries, bottles, mugs, aging barrels, and package entities. It has strong content value, but placeholder print names and debug output need a production cleanup pass.",
    features: ["brewing barrel", "aging barrel", "distillery", "press", "beer mugs", "bottles"],
    signals: "36 Lua files, 169 total files, 12 placeholder/debug markers"
  },
  {
    title: "StormFox Weather and Atmosphere",
    source: "Addon",
    category: "Integration",
    path: "addons/mafiarp_weather_system",
    completion: 84,
    description: "A full weather and environmental atmosphere addon with rain, clouds, lighting, temperature, time relays, tools, and editor support. It is valuable ambience, with WIP/debug markers worth reviewing.",
    features: ["weather states", "time relays", "temperature", "lightning tool", "surface editor"],
    signals: "101 Lua files, 45 network signals, 10 WIP/debug markers"
  },
  {
    title: "Modern Vehicle Dealer",
    source: "Addon",
    category: "Economy",
    path: "addons/moderncardealer",
    completion: 92,
    description: "A comprehensive vehicle dealership addon with car dealers, spawn boxes, showcases, triggers, test drives, languages, configuration, client UI, and server transaction logic.",
    features: ["car dealer", "vehicle showcases", "test drives", "multi-language", "server economy"],
    signals: "31 Lua files, 4 entities, 58 network signals"
  },
  {
    title: "PAC3 Outfit Customization",
    source: "Addon",
    category: "Lifestyle",
    path: "addons/pac3",
    completion: 89,
    description: "The PAC3 customization stack used for appearance, accessories, web audio, animation parts, editor panels, and custom MafiaRP icons. It is broad and mature, though large third-party packages include normal upstream TODOs.",
    features: ["outfit editor", "custom parts", "accessory support", "animations", "MafiaRP icons"],
    signals: "452 total files, 185 Lua files, 6 upstream TODO markers"
  },
  {
    title: "Perfect Casino Kit",
    source: "Addon",
    category: "Economy",
    path: "addons/pcasino",
    completion: 90,
    description: "A casino addon with blackjack, roulette, mystery wheel, plaques, NPCs, signs, creator tools, chip migration logic, and derma configuration. It gives casino ownership real player-facing content.",
    features: ["blackjack", "roulette", "mystery wheel", "casino NPC", "chip data", "creator tool"],
    signals: "60 Lua files, 8 entities, 71 network signals"
  },
  {
    title: "Realistic Police Addon",
    source: "Addon",
    category: "Police",
    path: "addons/realistic_police",
    completion: 94,
    description: "A police addon with computers, cameras, jails, camera screens, bailers, jail positions, handcuffs, taser assets, tablets, and law-enforcement UI art.",
    features: ["police computer", "jails", "cameras", "camera screens", "handcuffs", "fine book"],
    signals: "50 Lua files, 187 total files, 56 network signals"
  },
  {
    title: "Oil Drilling and Refinery Economy",
    source: "Addon",
    category: "Economy",
    path: "addons/zeros_oilrush_2.1.5",
    completion: 88,
    description: "A production economy addon for oil drilling, barrels, diesel, petrol, burners, drill holes, pipes, towers, refining, and transport. It adds a major legal industry to the server.",
    features: ["drill towers", "oil barrels", "diesel barrels", "refinery", "pipes", "fuel economy"],
    signals: "110 Lua files, 8 entities, 55 network signals"
  },
  {
    title: "XPGUI Interface Library",
    source: "Addon",
    category: "Integration",
    path: "addons/[lib]xpgui_library",
    completion: 86,
    description: "A reusable GUI library with controls, fonts, animation helpers, binding support, and sound assets. It is infrastructure for richer custom panels across the gamemode.",
    features: ["button controls", "menus", "scroll panels", "fonts", "animations", "sound UI"],
    signals: "76 Lua files, 82 total files, a few library TODO/debug markers"
  }
];

const removedSystemTitles = new Set([
  "3D2D Clothing Clipping Interface",
  "Account-Level Player Flags",
  "Admin Entity Vision",
  "Advanced Staff Operations Suite",
  "Bodygroup Customization Station",
  "Cellar-Style Premium Interface",
  "Cinematic Item Pickup View",
  "Clearance and Access Control",
  "Collision Rule Handler",
  "Custom Crosshair",
  "Configurable Keybind Menu",
  "Extended Item Actions",
  "General Event Logging",
  "Global Model Animation Class Setter",
  "Helix Framework Enhancements",
  "Item Pickup Animation",
  "Item Pickup Cooldowns",
  "Liquid Container Framework",
  "MafiaRP Core Framework",
  "Modern Notification Toasts",
  "Next-Generation UI Experiments",
  "PAC3 Outfit Customization",
  "Operations Control Center",
  "Permanent Entity Removal",
  "Persistent Storage Containers",
  "Prop Damage Protection",
  "Prop Protection Addon",
  "Roleplay Utility Bundle",
  "Spawnmenu Access Restriction",
  "Spawnmenu Item Browser",
  "Standalone Drug Production Pack",
  "Temporary Permission Flags",
  "Third-Person Camera Toggle",
  "Timed Action Bars",
  "Vendor Flag Requirements",
  "Voice Activity Overlay",
  "XPGUI Interface Library"
]);

const systems = rawSystems.filter((system) => !removedSystemTitles.has(system.title));

const showcaseTitles = new Set([
  "Police CAD, Evidence, and Jail System",
  "Clothing, Jewelry, and Wardrobes",
  "Workbench Crafting Framework",
  "In-Server Alcohol Production",
  "Cannabis Cultivation and Processing",
  "Modern Vehicle Dealer"
]);

const categoryIcons = {
  Core: "cpu",
  Economy: "cash-stack",
  Crime: "fingerprint",
  Police: "shield-check",
  Lifestyle: "person-bounding-box",
  UI: "window-sidebar",
  Admin: "tools",
  Integration: "puzzle"
};

function scoreColor(score) {
  if (score >= 90) return "var(--green)";
  if (score >= 80) return "var(--gold)";
  if (score >= 70) return "var(--cyan)";
  return "var(--red)";
}

function byTitle(a, b) {
  return a.title.localeCompare(b.title);
}

function visibleSystems() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const sourceFilter = document.getElementById("sourceFilter");
  const query = String(searchInput.value || searchInput.getAttribute("value") || "").trim().toLowerCase();
  const category = String(categoryFilter.value || categoryFilter.getAttribute("value") || "all");
  const source = String(sourceFilter.value || sourceFilter.getAttribute("value") || "all");

  return systems
    .filter((system) => {
      const haystack = [
        system.title,
        system.source,
        system.category,
        system.path,
        system.description,
        system.features.join(" "),
        system.signals
      ].join(" ").toLowerCase();

      return (!query || haystack.includes(query))
        && (category === "all" || system.category === category)
        && (source === "all" || system.source === source);
    })
    .sort(byTitle);
}

function renderStats() {
  const plugins = systems.filter((system) => system.source === "Plugin").length;
  const addons = systems.filter((system) => system.source === "Addon").length;
  const avg = Math.round(systems.reduce((sum, system) => sum + system.completion, 0) / systems.length);

  document.getElementById("heroStats").innerHTML = [
    ["Systems", systems.length],
    ["Plugins", plugins],
    ["Avg. readiness", `${avg}%`]
  ].map(([label, value]) => `
    <div class="stat-card parallax-card" data-depth="0.018">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `).join("");

  const polished = systems.filter((system) => system.completion >= 90).length;
  const strong = systems.filter((system) => system.completion >= 80 && system.completion < 90).length;
  const review = systems.filter((system) => system.completion >= 70 && system.completion < 80).length;
  const build = systems.filter((system) => system.completion < 70).length;

  document.getElementById("completionSummary").innerHTML = [
    [`${avg}%`, "average completion"],
    [polished, "polished systems"],
    [strong, "strong systems"],
    [review + build, "needs review"]
  ].map(([value, label]) => `
    <div class="summary-tile">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `).join("");
}

function systemCard(system) {
  const color = scoreColor(system.completion);
  return `
    <article class="system-card parallax-card reveal-card" data-depth="0.028">
      <div class="system-card-header">
        <div>
          <span class="source-label">${system.source} / ${system.category}</span>
          <h3>${system.title}</h3>
        </div>
        <div class="completion-ring" style="--score: ${system.completion}; --ring-color: ${color};">
          ${system.completion}%
        </div>
      </div>
      <p>${system.description}</p>
      <div class="feature-list">
        ${system.features.map((feature) => `<span>${feature}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderCatalog() {
  const filtered = visibleSystems();
  document.getElementById("catalogGrid").innerHTML = filtered.map(systemCard).join("");
  document.getElementById("systemsTable").innerHTML = filtered.map((system) => {
    const color = scoreColor(system.completion);
    return `
      <tr>
        <td><strong>${system.title}</strong><br><span class="path-line">${system.path}</span></td>
        <td>${system.source}</td>
        <td>${system.category}</td>
        <td>
          <strong>${system.completion}%</strong>
          <div class="mini-bar" style="--ring-color: ${color}; --score-width: ${system.completion}%;">
            <span></span>
          </div>
        </td>
        <td>${system.signals}</td>
      </tr>
    `;
  }).join("");
}

function renderShowcase() {
  const cards = systems
    .filter((system) => showcaseTitles.has(system.title))
    .sort((a, b) => b.completion - a.completion)
    .map((system) => `
      <article class="showcase-card parallax-card reveal-card" data-depth="0.035">
        <div class="showcase-icon">
          <sl-icon name="${categoryIcons[system.category] || "collection"}"></sl-icon>
        </div>
        <p class="eyebrow">${system.category} / ${system.completion}% complete</p>
        <h3>${system.title}</h3>
        <p>${system.description}</p>
        <div class="card-meta">
          ${system.features.slice(0, 4).map((feature) => `<span class="pill">${feature}</span>`).join("")}
        </div>
      </article>
    `).join("");

  document.getElementById("showcaseGrid").innerHTML = cards;
}

function bindFilters() {
  ["searchInput", "categoryFilter", "sourceFilter"].forEach((id) => {
    const el = document.getElementById(id);
    el.addEventListener("sl-input", renderCatalog);
    el.addEventListener("sl-change", renderCatalog);
    el.addEventListener("input", renderCatalog);
    el.addEventListener("change", renderCatalog);
  });
}

function initializeMotion() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    document.documentElement.classList.add("reduced-motion");
    return;
  }

  const parallaxItems = () => [...document.querySelectorAll(".parallax-card")];

  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5).toFixed(4);
    const y = (event.clientY / window.innerHeight - 0.5).toFixed(4);
    document.documentElement.style.setProperty("--cursor-x", x);
    document.documentElement.style.setProperty("--cursor-y", y);
  }, { passive: true });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  const observeReveals = () => {
    document.querySelectorAll(".reveal-card:not(.is-observed)").forEach((element) => {
      element.classList.add("is-observed");
      revealObserver.observe(element);
    });
  };

  observeReveals();

  const catalog = document.getElementById("catalogGrid");
  new MutationObserver(observeReveals).observe(catalog, { childList: true });

  window.addEventListener("scroll", () => {
    const drift = Math.min(1, window.scrollY / 900).toFixed(3);
    document.documentElement.style.setProperty("--scroll-drift", drift);
  }, { passive: true });

  parallaxItems().forEach((item, index) => {
    item.style.setProperty("--float-delay", `${(index % 6) * -0.45}s`);
    item.style.setProperty("--depth", item.dataset.depth || "0.02");
  });
}

renderStats();
renderShowcase();
renderCatalog();
bindFilters();
initializeMotion();
