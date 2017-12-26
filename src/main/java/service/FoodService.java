package service;

import model.Food;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repository.FoodRepository;

import java.util.List;

/**
 * Created by adaeng on 2017. 12. 12..
 */
@Service
@Transactional
public class FoodService {

    @Autowired
    FoodRepository foodRepository;

    public Integer addFood(Food food){
        foodRepository.save(food);
        return food.getId();
    }

    public List<Food> findFoods(){
        return foodRepository.findAll();
    }

    public List<Food> findBySize(int start){
        int beginPage = (start-1) * 10;
        int maxContentList = 10;
        return foodRepository.findBySize(beginPage, maxContentList);
    }

    public int getSize(){
        int countResult = findFoods().size();
        int lastPageNumber = (int) ((countResult / 10) + 1);

        return lastPageNumber;
    }

    public List<Food> findByAdress(String searchKeyword){
        return foodRepository.findByAddress(searchKeyword);
    }

    public List<Food> findByName(String searchKeyword){
        return foodRepository.findByName(searchKeyword);
    }


}
