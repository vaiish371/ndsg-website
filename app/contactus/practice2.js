import express from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

// path params
var jokes = [];
app.get("/jokes/:id", (req, res) => {
    //converts string -> int
    const id = parseInt(req.params.id);
    const year = req.body.year.toString().match()
    const foundJoke = jokes.find((joke) => joke.id === id);
    res.json(foundJoke)
    res.status(400);
})

app.get("/filter", (req, res) => {
    const queryParam = req.query.type
    const foundJoke = jokes.filter((joke) => joke.jokeType === queryParam);
    res.json(foundJoke)
    const payload = req.body;
    res.
    return res.status(200).json({
        status: true,
        result: {
            user: user.toJSON()
        }
    })
})

app.post('/', (req,res) => {
    var newId = movies[movies.length-1].id+1
    movies.push({
        id: newId,
        name: req.body.name,
        year:req.body.year
    });
})

var movies = [];
app.put('/:id', (req, res) =>{
    var movieId = parseInt(req.params.id);
    var movieFound = movies.find(m => m.id === movieId);
    if (movieFound!=undefined){
        var idx = movies.indexOf(movieFound);
        movies[idx] = {
           id: req.params.id,
           name: req.body.name,
           year: req.body.year 
        }

    }
})

app.delete('/:id', (req, res) => {
    var removeIdx = movies.map( m => m.id).indexOf(parseInt(req.params.id));
    if(removeIdx!=-1){
        movies.splice(removeIdx, 1);
    }
})

// when our server is returned, it triggers the callback function
app.listen(3000, () => {
    console.log("The server is running")
    
})
/*
req: contains details of http method, headers, request body
res: returns json data or response code
.json can be given any string or JS object. it will convert it to json automatically.

Maven-based project that includes a pom.xml build file.
JPA - lets you map objects to relational databases
@Entity
@Table

@Id (indicates that it is primary key)
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column

Controller - gets all the mappings, @RestController, autowires service in constructor
Service - only interface
ServiceImplementor - implements the service interface, @Service
- holds a private object of AccountRepository
<Class>Repository - interface extends JpaRepository<Class, PrimaryKeyDataType>
@SpringBootApplication - in main, you do SpringAppplication.run(.class, args)
- it does component scanning.
-it will automatically scan the components in the current package and its sub-packages. Thus it will register them in Spring’s Application Context, and allow us to inject beans using @Autowired.




 An EmployeeRepository is injected by constructor into the service.
Dependency Injection - done through @Autowired. Will inject beans.

The interface ApplicationContext represents the IoC container. The Spring container is responsible for instantiating, configuring and assembling objects known as beans, as well as managing their life cycles.

In other words, by declaring all the bean dependencies in a Spring configuration file, Spring container can autowire relationships between collaborating beans. This is called Spring bean autowiring.
This is done via annotations.

*/
// http method
// request headers - info abt request
// request payload: for post, patch , put 
// query params ?
// path params :
// response headers - info abt server's response
// response body - actual data returned, produces http status messages

@PostMapping("/employees")
  Employee newEmployee(@RequestBody Employee newEmployee) {
    return repository.save(newEmployee);
  }

  // Single item
  
  @GetMapping("/employees/{id}")
  Employee one(@PathVariable Long id) {
    
    return repository.findById(id)
      .orElseThrow(() -> new EmployeeNotFoundException(id));
  }

  @PutMapping("/employees/{id}")
  Employee replaceEmployee(@RequestBody Employee newEmployee, @PathVariable Long id) {
    return repository.findById(id)
      .map(employee -> {
        employee.setName(newEmployee.getName());
        employee.setRole(newEmployee.getRole());
        return repository.save(employee);
      })
      .orElseGet(() -> {
        return repository.save(newEmployee);
      });

    @DeleteMapping("/employees/{id}")
  void deleteEmployee(@PathVariable Long id) {
    repository.deleteById(id);
  }
  }

  @GetMapping("/items/{id}")
Item getById(@PathVariable Long id) {

  return itemRepository.findById(id)
      .orElseThrow(() -> new ItemNotFoundException(id));
}

@PostMapping("/api/foos")
@ResponseBody
public String addFoo(@RequestParam(name = "id") String fooId, @RequestParam String name) { 
    return "ID: " + fooId + " Name: " + name;
}

// Dependencies needed:
// Spring Web, Spring Data JPA

/*
For Maps,
.get("<key>")
.put(k,v)
.remove()
.keySet()
.values()

For ArrayList,
ArrayList<String> cars = new ArrayList<String>();
.add(e)
.get(i)
.set(0, "Opel")
.remove()
.size()

Collections.sort(myNumbers);
*/

  //exception
  //response codes
  public class JavaExceptionExample{  
    public static void main(String args[]){  
     try{  
        //code that may raise exception  
        int data=100/0;  
     }catch(ArithmeticException e){System.out.println(e);}  
     //rest code of the program   
     System.out.println("rest of the code...");  
    }  

    class UserDefinedException extends Exception  
    {  
        public UserDefinedException(String str)  
        {  
            // Calling constructor of parent Exception  
            super(str);  
        }  

    }  

    try  
        {  
            // throw an object of user defined exception  
            throw new UserDefinedException("This is user-defined exception");  
        }  
        catch (UserDefinedException ude)  
        {  
            System.out.println("Caught the exception");  
            // Print the message from MyException object  
            System.out.println(ude.getMessage());  
        }  




// string -> int
    Integer.parseInt(s)

// int -> string
Integer.toString()

Point spot = new Point(3,4)

s = s.toLowerCase();

int[] nums = {1,2,3,4,5};
String fruit = "banana";
char letter = fruit.charAt(0);
char[] fruitChars = fruit.toCharArray();
"banana".indexOf('a')
return String.format("%02d:%02d %s", hour, minute, ampm); 

for(Staff s: staff){

}