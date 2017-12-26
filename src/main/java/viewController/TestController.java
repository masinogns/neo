package viewController;

import model.Food;
import model.House;
import model.Place;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mobile.device.site.SitePreference;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import service.FoodService;
import service.HouseService;
import service.PlaceService;


import java.util.List;

/**
 * Created by adaeng on 2017. 10. 26..
 */

@Controller
public class TestController {

    @Autowired
    HouseService houseService;

    @Autowired
    PlaceService placeService;

    @Autowired
    FoodService foodService;

    @RequestMapping(value = "/")
    public String index(Model model, SitePreference device){
        String isMobile = "";
        if (device.isMobile()) {
            isMobile = "index";
        } else {
            isMobile = "no_mobile";
        }

        return isMobile;
    }

//    @RequestMapping(value = "detail")
//    public String detail(Model model){
//        List<House> listHouse = houseService.findHouses();
//        model.addAttribute("datas",listHouse);
//        return "detail";
//    }

    @RequestMapping(value = "detail/house")
    public String detailHouse(Model model){
        List<House> listHouse = houseService.findHouses();
        model.addAttribute("datas",listHouse);
        return "details/houseDetail";
    }

    @RequestMapping(value = "detail/place")
    public String detailPlace(Model model){
        List<Place> listPlace = placeService.findPlaces();
        model.addAttribute("datas",listPlace);
        return "details/travalDetail";
    }

    @RequestMapping(value = "detail/food")
    public String detailFood(Model model){
        List<Food> listFood = foodService.findFoods();
        model.addAttribute("datas",listFood);
        return "details/restaurantDetail";
    }




}




