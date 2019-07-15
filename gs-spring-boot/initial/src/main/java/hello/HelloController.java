package hello;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.bind.annotation.DeleteMapping;

@RestController
@RequestMapping("/login")
public class HelloController {
    
	private Map<String, String>users = new ConcurrentHashMap<String, String>(); 
	private String currentUser = "";
	private boolean admin = false;
	
	public HelloController() {
		users.put("admin", "admin");
	}
	
	/***
	 * Login to an account if it exists. 
	 * 
	 * @param user: username of account.
	 * @param pwd: password of that account. 
	 * @return any errors.
	 */
    @GetMapping("/")
    public String login(@RequestParam String user, @RequestParam String pwd){
    	
    	if(currentUser.equals("")) {
    		if(users.containsKey(user)) {
	    		if(users.get(user).equals(pwd)) {
	    			if(user.equals("admin")) {
	    				admin = true;
	    			}
	    			currentUser = user;
	    			
    				 try { 
    					 Thread.sleep(5000);
    				 } 
    				 catch(InterruptedException e){ 
    					 Thread.currentThread().interrupt(); 
    				 } 
	    			
	    			
	    			return user + " is logged in.\n";
	    		}
	    		return "Invalid Password. Try Again.\n";
    		}
    		return "User not found. Try again.\n";
    	}
    	return "Someone is already logged in. Logout and Try again.\n";
    }
    
    
    /***
     * Add a User to the map(database) if you're an admin. 
     * 
     * @param user
     * @param pwd
     * @return
     */
    @PostMapping("add")
    public String addUser(@RequestParam String user, @RequestParam String pwd) {
    	
    	//Add user if admin is logged in and theres no repeats.
    	if(!users.containsKey(user)) {
	    	if(admin) {
	    		users.put(user, pwd);
	    		return (user + " added!" + "\n");
	    	}
	    	return "Permission Denied! Admin credentials needed.\n";
    	}
    	
    	return "User already exists. Try again.\n";
    	
    }
    
    /***
     * Update current user's password.
     * 
     * @param user
     * @param pwd
     * @return
     */
    @PutMapping("put")
    public String updateUser(@RequestParam String user, @RequestParam String pwd) {
    	
    	//Update if user exists.
    	if(users.containsKey(user)) {
	    	if(currentUser.equals(user)) {
		    	users.replace(user, users.get(user), pwd);
		    	return(user + "'s password updated!" + "\n");
	    	}
    		return "Can only update " + currentUser + "'s password.\n";
    	}
	
    	return "User doesn't exist. Try again.\n";
    }
    
    /***
     * Admin: Delete an user's account.
     * @param user
     * @return
     */
    @DeleteMapping("delete/{user}")
    public String deleteUser(@RequestParam String user){
    	
    	//Delete if user exists.
    	if(users.containsKey(user)) {
	    	if(admin) {
		    	users.remove(user);
		    	return (user + " deleted!" + "\n");
	    	}
	    	return "Permission Denied! Admin credentials needed.\n";
    	}
    	
    	return "User doesn't exist. Try again.\n";
    }
    
    /***
     * Admin: Delete all accounts in the current map(database). 
     * @return
     */
    @DeleteMapping("deleteAll")
    public String deleteAll() {
    	
    	//Delete everyone
    	if(admin) {
    		users.clear();
    		users.put("admin", "admin");
    		return ("Cleared all users!" + "\n");
    	}
    	
    	return "Permission Denied! Admin credentials needed.\n";
    }
    
    /***
     * Display all the accounts in current map(database). 
     * @return
     */
    @GetMapping("display")
    public String displayAll() {
    	
    	//display everyone in the map.
    	String display = "User:     Pwd:\n";
    	for(String user: users.keySet()) {
    		display = display + String.format("%-10s", user) + String.format("%-10s", users.get(user)) + "\n";
    	}
    	return display;
    }
    
    /***
     * Logout of the account currently logged into. 
     * 
     * @param user
     * @param pwd
     * @return
     */
    @GetMapping("logout")
    public String logout() {
    	
    	String temp = currentUser; 
    	//logout of the current account
		if(!currentUser.equals("")) {
			if(currentUser.equals("admin") && admin) {
				admin = false;
			}
			currentUser = "";
			return temp + " is logged out!\n";
		}
		return "No one is logged in.\n"; 
    	
    }
    
    
    @GetMapping("currentUser")
    public String current() {
    	return currentUser;
    }
}

