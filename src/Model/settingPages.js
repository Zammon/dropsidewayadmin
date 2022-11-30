import React from "react";

const managepostPage = [
    {
        name_type: 'select type posts',
        list_in_type: [
            {
                item: 'Looking lost items'
            },{
                item: 'Finding owner'
            }
        ],
        minheight: '67px'
    },{
        name_type: 'select type item or tag',
        list_in_type: [
            {
                item: 'Smartphone'
            },{
                item: 'Wallet'
            },{
                item: 'Decorations'
            },{
                item: 'Bag'
            },{
                item: 'Cosmetics'
            }
        ],
        minheight: '163px'
    },{
        name_type: 'select province or area',
        list_in_type: [
            {
                item: 'Building 1'
            },{
                item: 'Building 2'
            },{
                item: 'Building 3'
            },{
                item: 'Building 4'
            },{
                item: 'Building 5'
            },{
                item: 'Building 6'
            },{
                item: 'Building 7'
            },{
                item: 'Building 8'
            },{
                item: 'Building 9'
            },{
                item: 'Building 10'
            }
        ],
        minheight: '250px'
    }
]


const manageuserPage = [
    {
        name_type:'select type user',
        list_in_type: [
            {
                item: 'Student'
            },{
                item: 'Personnel'
            }
        ],
        minheight: '67px'
    },{
        name_type:'select type gender',
        list_in_type: [
            {
                item: 'Male'
            },{
                item: 'Woman'
            },{
                item: 'Other'
            }
        ],
        minheight: '99px'
    },{
        name_type:'select status user',
        list_in_type: [
            {
                item: 'Building 1'
            },{
                item: 'Building 2'
            },{
                item: 'Building 3'
            },{
                item: 'Building 4'
            },{
                item: 'Building 5'
            },{
                item: 'Building 6'
            },{
                item: 'Building 7'
            },{
                item: 'Building 8'
            },{
                item: 'Building 9'
            },{
                item: 'Building 10'
            }
        ],
        minheight: '250px'
    }
]

export { managepostPage, manageuserPage };