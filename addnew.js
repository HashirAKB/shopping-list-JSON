
let items = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        
        const addItem = (ev)=>{
            console.log("Hello")
            ev.preventDefault();  //to stop the form submitting
            let item = {
                Name: document.getElementById('iname').value,
                Quantity: document.getElementById('inum').value,
                Unit: document.getElementById('tbox1').value,
                Department: document.getElementById('tbox2').value,
                Notes: document.getElementById('tbox3').value
            }
            items.push(item);

            // // STEP 3: Writing to a file 
            // fs.writeFile("list.json", JSON.stringify(items), err => { 
     
            // // Checking for errors 
            // if (err) throw err;  
   
            // console.log("Done writing"); // Success
            // });
            
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {items} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(items, '\t', 2);

            //saving to localStorage
            localStorage.setItem("list.json", JSON.stringify(items) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('adnewbt').addEventListener('click', addItem);
        });