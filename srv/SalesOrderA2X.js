const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const SalesOrderA2X = await cds.connect.to("SalesOrderA2X"); 
      srv.on('READ', 'A_SalesOrder', req => { 
        const Read = SalesOrderA2X.run(req.query) 
        return Read}); 
}