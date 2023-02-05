/* Insecure Direct Object Reference (IDOR) */

/*

    Insecure direct object references (IDOR) are a type of access control vulnerability that arises when
    an application uses user-supplied input to access objects directly. The term IDOR was popularized by
    its appearance in the OWASP 2007 Top Ten. However, it is just one example of many access control implementation
    mistakes that can lead to access controls being circumvented.  

*/
/*

    Consider a website that uses the following URL to access the customer account page,
    by retrieving information from the back-end database:
ff
    https://insecure-website.com/customer_account?customer_number=132355
                                                  \_________/      \__/
                                                       |             |
                                                     query        user_id  

    Here, the customer number is used directly as a record index in queries that are performed on the back-end database.
    If no other controls are in place, an attacker can simply modify the customer_number value, bypassing access controls to
    view the records of other customers.

*/

/*

    Those kinda direct access can be done by various types of object, static files, private images...

*/
f;

/*
    To prevent IDORS:
    - Avoid direct object references
    - Implement detailed access control
    - Use an unpredictable hash or random string instead
    - Implement detailed access control
*/

/*
    Idors happen when:
    - Access control is not properly implemented
    - References to data objects are predictable
*/

/*
    To detect existing IDORS
    - Manual testing 
    - Code review
*/
