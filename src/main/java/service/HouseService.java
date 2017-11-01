package service;

import model.House;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repository.HouseRepository;

import java.util.List;

/**
 * Created by adaeng on 2017. 11. 1..
 */
@Service
@Transactional
public class HouseService {

    @Autowired
    HouseRepository houseRepository;

    public Integer addHouse(House house){
        houseRepository.save(house);
        return house.getId();
    }

    public List<House> findHouses(){
        return houseRepository.findAll();
    }


}
