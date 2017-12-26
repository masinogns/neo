package service;


import model.Place;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repository.PlaceRepository;

import java.util.List;

/**
 * Created by adaeng on 2017. 12. 12..
 */
@Service
@Transactional
public class PlaceService {

    @Autowired
    PlaceRepository placeRepository;

    public Integer addPlace(Place place){
        placeRepository.save(place);
        return place.getId();
    }

    public List<Place> findPlaces(){
        return placeRepository.findAll();
    }

    public List<Place> findBySize(int start){
        int beginPage = (start-1) * 10;
        int maxContentList = 10;
        return placeRepository.findBySize(beginPage, maxContentList);
    }

    public int getSize(){
        int countResult = findPlaces().size();
        int lastPageNumber = (int) ((countResult / 10) + 1);

        return lastPageNumber;
    }

    public List<Place> findByAdress(String searchKeyword){
        return placeRepository.findByAddress(searchKeyword);
    }

    public List<Place> findByName(String searchKeyword){
        return placeRepository.findByName(searchKeyword);
    }



}
