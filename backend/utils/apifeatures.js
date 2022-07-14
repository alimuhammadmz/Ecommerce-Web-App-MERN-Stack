class ApiFeatures{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword ? {           //if keyword is defined
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            } 
        }:{                                                 //if keyword is not defined

        }

        this.query = this.query.find({...keyword});
        return this;
    }
}

module.exports.ApiFeatures = ApiFeatures;