package repository;


import model.House;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by adaeng on 2017. 10. 30..
 */
@Repository
public class HouseRepository  {

    @PersistenceContext
    EntityManager em;

    public void save(House house){
        em.persist(house);
    }

    public House findOne(Integer id) {
        return em.find(House.class,id);
    }

    public List<House> findAll(){
        return em.createQuery("select h from House h", House.class).getResultList();
    }



}
