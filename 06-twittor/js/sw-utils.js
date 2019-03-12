function actualizaCacheDinamico(dynamiCache,req,res){

if(res.ok){

   caches.open(dynamiCache).then(cache=>{

      cache.put(req,res.clone());
  return res.clone();
   }); 
}
else{
    return res;

}

}