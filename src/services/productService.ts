    import http from './apiService';  
    class ProductService {  
         
        getAll() {  
            return http.get('/api/422f8a50?count=1000&key=ee74e490');  
          }  
            
    }  
    export default new ProductService();  
