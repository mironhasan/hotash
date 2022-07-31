const card = {
    hero: [
        {
            variant: "green",
            title: "total users",
            number: "277",
            icon: "account_circle",
            trend: "trending_up",
            percent: "+ 95%",
            compare: "last month"
        },
        {
            variant: "purple",
            title: "total orders",
            number: "338",
            icon: "shopping_cart",
            trend: "trending_down",
            percent: "- 30%",
            compare: "last month"
        },
        {
            variant: "blue",
            title: "total products",
            number: "557",
            icon: "shopping_bag",
            trend: "trending_down",
            percent: "- 25%",
            compare: "last month"
        },
        {
            variant: "yellow",
            title: "total reviews",
            number: "166",
            icon: "hotel_class",
            trend: "trending_up",
            percent: "+ 45%",
            compare: "last month"
        },
    ],
    sales: {
        title: "total sales",
        amount: "$3,787,681.00",
        chart: [
            { name: 'Sales', value: 400, },
            { name: 'Invests', value: 300, },
            { name: 'Expense', value: 250, },
            { name: 'Profits', value: 350, },
        ],
    },
    weeks: {
        title: 'weekly overview',
        chart: [
            { name: 'fri', uv: 2000, pv: 2400, amt: 2400, },
            { name: 'sat', uv: 3000, pv: 1398, amt: 2210, },
            { name: 'san', uv: 2000, pv: 9800, amt: 2290, },
            { name: 'mon', uv: 2780, pv: 3908, amt: 2000, },
            { name: 'tue', uv: 1890, pv: 4800, amt: 2181, },
            { name: 'wen', uv: 2390, pv: 3800, amt: 2500, },
            { name: 'thu', uv: 3490, pv: 4300, amt: 2100, },
        ],
    },
    years: {
        title: "yearly overview",
        chart: [
            { name: '2022', profit: 4000, sales: 2400, amt: 2400, },
            { name: '2021', profit: 3000, sales: 1398, amt: 2210, },
            { name: '2020', profit: 2000, sales: 9800, amt: 2290, },
            { name: '2019', profit: 2780, sales: 3908, amt: 2000, },
            { name: '2018', profit: 1890, sales: 4800, amt: 2181, },
            { name: '2017', profit: 2390, sales: 3800, amt: 2500, },
        ],
    },
    popular: {
        title: "popular products",
    },
    traffic: {
        title: "traffic sources",
    },
    country: {
        title: "country sales",
        list: [
            {
                src: "images/flag/bangladesh.jpg",
                alt: "bangladesh",
                name: { title: "country", text: "bangladesh" },
                sales: { title: "sales", text: "2500" },
                bounce: { title: "bounce", text: "29.9%" },
            },
            {
                src: "images/flag/usa.jpg",
                alt: "united state",
                name: { title: "country", text: "united state" },
                sales: { title: "sales", text: "1400" },
                bounce: { title: "bounce", text: "13.6%" },
            },
            {
                src: "images/flag/saudi.jpg",
                alt: "saudi arabia",
                name: { title: "country", text: "saudi arabia" },
                sales: { title: "sales", text: "3900" },
                bounce: { title: "bounce", text: "42.5%" },
            },
            {
                src: "images/flag/germany.jpg",
                alt: "germany",
                name: { title: "country", text: "germany" },
                sales: { title: "sales", text: "4170" },
                bounce: { title: "bounce", text: "15.7%" },
            },
            {
                src: "images/flag/philippines.jpg",
                alt: "philippines",
                name: { title: "country", text: "philippines" },
                sales: { title: "sales", text: "5298" },
                bounce: { title: "bounce", text: "35.4%" },
            },
        ],
    },
}

export default card