select 
     c.customer_id
    ,a.adrress as address_customer 
from 
customers as c
left join address as a 
on c.customer_id = a.customer_id
