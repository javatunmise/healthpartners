let DateTimeUtil = {
    toTime: function(date){
        return new Date(date).toISOString().substring(11,16)
    },

    toDate: function(date) {
        return new Date(date).toISOString().substring(0,10)
    }
}

export { DateTimeUtil }