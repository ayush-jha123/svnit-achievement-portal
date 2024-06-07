export default{
    name:'oppertunities',
    title:'Oppertunities',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'participants',
            title:'ForWhom',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'userid',
            title:'UserId',
            type:'string'
        },
        {
            name:'applylink',
            title:'ApplyLink',
            type:'string'
        },
        {
          name: 'like',
          title: 'Like',
          type:'array',
         of:[{ type:'string'}]
        },
        {
            name:'postedby',
            title:'PostedBy',
            type:'string'
        },
        {
            name:'userPicture',
            title:'userPhoto',
            type:'string'
        },
        {
          name: 'tags',
          title: 'Tags',
          type:'string'
        },
        {
            name:'openingdate',
            title:'OpeningDate(dd-mm-yyyy)',
            type:'string'
        },
        {
            name:'closingdate',
            title:'ClosingDate(dd-mm-yyyy)',
            type:'string'
        }
    ]
}