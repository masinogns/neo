package viewController;

import model.House;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import service.HouseService;
import sun.rmi.runtime.Log;

import java.util.List;
import java.util.Map;

/**
 * Created by adaeng on 2017. 11. 16..
 */
@Controller
public class AdminController {

    @Autowired
    HouseService houseService;

    @RequestMapping(value = "admin")
    public String admin(Model model){

        return "admin/admin_index";
    }

    @RequestMapping(value = "admin/house-list")
    public String adminList(Model model,
                            @RequestParam(defaultValue="1") int curPage){

        List<House> houseList = houseService.findBySize(curPage);
        int totalPageResult = houseService.getSize();

        model.addAttribute("houseList",houseList);
        model.addAttribute("totalPageSize",totalPageResult);

        return "admin/admin_list";
    }

    @RequestMapping(value = "admin/house-list/search", method = RequestMethod.GET)
    public String adminList(Model model,
                            @RequestParam(defaultValue = "") String houseSearchKeyword){

        List<House> houseList = houseService.findByAdress(houseSearchKeyword);
        int totalPageResult = houseList.size();

        model.addAttribute("houseList", houseList);
        model.addAttribute("totalPageSize",totalPageResult);

        return "admin/admin_list";
    }



    @RequestMapping(value = "admin/update")
    public String adminUpdate(Map<String, String> params, Model model){

        return "admin/admin_update";
    }

    @RequestMapping(value = "admin/update",method = RequestMethod.POST)
    public String adminUpdate(Map<String, String> params){


        return "admin/admin_update";
    }

    @RequestMapping(value = "admin/delete")
    public String adminDelete(Model model){

        return "admin";
    }


}
