const express = require('express'); 

const app = express();

const staff = [
  { name: "Ava Martinez", position: "Manager", tenure: 5 },
  { name: "Leo Thompson", position: "Sales Associate", tenure: 2 },
  { name: "Nina Patel", position: "Marketing Coordinator", tenure: 3 },
  { name: "Ethan Rogers", position: "Software Engineer", tenure: 4 },
  { name: "Sofia Nguyen", position: "Customer Support", tenure: 1 },
  { name: "Jackson Lee", position: "Operations Lead", tenure: 6 },
  { name: "Harper Davis", position: "Finance Analyst", tenure: 2 },
  { name: "Mateo Alvarez", position: "UX Designer", tenure: 3 },
  { name: "Olivia Chen", position: "Project Manager", tenure: 7 },
  { name: "Noah Wilson", position: "Technical Support", tenure: 1 }
];

const widgetCatalog = [
  {
    sku: "WID-001",
    name: "Solar-Powered Desk Lamp",
    price: 49.99,
    unitsInStock: 32,
    img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    sku: "WID-002",
    name: "Wireless Charging Pad",
    price: 29.95,
    unitsInStock: 0,
    img: "https://images.unsplash.com/photo-1616627562158-1a0b45341d6b?auto=format&fit=crop&w=600&q=80",
    inStock: false
  },
  {
    sku: "WID-003",
    name: "Ergonomic Keyboard",
    price: 89.5,
    unitsInStock: 12,
    img: "https://images.unsplash.com/photo-1587202372775-98927d38b44c?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    sku: "WID-004",
    name: "Smart Water Bottle",
    price: 64.0,
    unitsInStock: 47,
    img: "https://images.unsplash.com/photo-1616627562158-1a0b45341d6b?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    sku: "WID-005",
    name: "Noise-Cancelling Headphones",
    price: 129.99,
    unitsInStock: 5,
    img: "https://images.unsplash.com/photo-1585386959984-a4155223167a?auto=format&fit=crop&w=600&q=80",
    inStock: true
  }
];



const suppliers = [
  {
    name: "Atlas Distribution Co.",
    location: "Chicago, IL",
    reliabilityScore: 9.2,
    website: "https://www.atlasdistribution.com",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
  },
  {
    name: "Evergreen Supply LLC",
    location: "Portland, OR",
    reliabilityScore: 8.7,
    website: "https://www.evergreensupply.com",
    logo: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
  },
  {
    name: "NovaTech Imports",
    location: "Austin, TX",
    reliabilityScore: 9.5,
    website: "https://www.novatechimports.com",
    logo: "https://cdn-icons-png.flaticon.com/512/825/825540.png"
  },
  {
    name: "BlueSky Manufacturing",
    location: "Denver, CO",
    reliabilityScore: 8.1,
    website: "https://www.blueskymfg.com",
    logo: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
  },
  {
    name: "Summit Global Trade",
    location: "New York, NY",
    reliabilityScore: 9.0,
    website: "https://www.summitglobaltrade.com",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
  }
];






app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.get('/', (req, res) => {
    res.render('home.ejs', {})
})

app.get('/history', (req, res) => {
    res.render('history.ejs', {})
})

app.get('/catalog/:itemID', (req, res) => {
    res.render('catalog-item.ejs', {item: widgetCatalog.find(item => item.sku === req.params.itemID)})
})
// ^ using .find to compare the :itemID to the catalog

app.get('/catalog', (req, res) => {
    res.render('catalog.ejs', {catalog: widgetCatalog})
})

app.get('/staff/:index', (req, res) => {
    res.render('staff-member.ejs', {member: staff[req.params.index]})
})
// ^ using the index
app.get('/staff', (req, res) => {
    res.render('staff.ejs', {})
})

app.get('/contact-us', (req, res) => {
    res.render('contact-us.ejs', {})
})

app.get('/external-links', (req, res) => {
    res.render('external-links.ejs', {suppliers: suppliers})
})


