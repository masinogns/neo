package Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by masinogns on 2017. 10. 16..
 */
@Controller
public class controller {
    @RequestMapping(value = "/")
    public String index(Model model){
        return "index";
    }
}
