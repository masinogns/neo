package viewController;

import model.House;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import repository.HouseRepository;
import service.HouseService;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * Created by adaeng on 2017. 10. 26..
 */

@Controller
public class TestController {

    @Autowired
    HouseService houseService;

    @RequestMapping(value = "/")
    public String index(Model model){

        List<House> houseList = houseService.findHouses();
        model.addAttribute("tttt",houseList);

        return "index";
    }

    @RequestMapping(value = "detail")
    public String detail(Model model){
        return "detail";
    }
}




