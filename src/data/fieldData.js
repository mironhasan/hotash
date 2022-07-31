const field = {
    header: {
        search: { 
            type: "text", 
            place: "quick finding..." 
        },
    },
    productTable: {
        select: {
            show: {
                label: "show by",
                option: ["12 row", "24 row", "36 row"],
            },
            rating: {
                label: "rating by",
                option: ["1 star", "2 star", "3 star", "4 star", "5 star"],
            },
            brand: {
                label: "brand by",
                option: ["ecstasy", "freeland", "rongdhonu"],
            },
            category: {
                label: "category by",
                option: ["mans", "womans", "kids", "accessory"],
            },
        },
    },
}

export default field