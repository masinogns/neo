package repository;


import model.Place;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by adaeng on 2017. 12. 12..
 */
@Repository
public class PlaceRepository {

    @PersistenceContext
    EntityManager em;

    public void save(Place place){
        em.persist(place);
    }

    public Place findOne(Integer id) {
        return em.find(Place.class,id);
    }

    public List<Place> findAll(){
        return em.createQuery("select p from Place p", Place.class).getResultList();
    }

    public List<Place> findBySize(int start,int setContentResult){
        return em.createQuery(
                "select p from Place p", Place.class).setFirstResult(start).setMaxResults(setContentResult).getResultList();
    }

    public List<Place> findByAddress(String searchKeyWord){
        TypedQuery<Place> query =  em.createQuery("select p from Place p where p.address like :searchKeyWord",Place.class);
        query.setParameter("searchKeyWord","%" + searchKeyWord + "%");
        return query.getResultList();
    }

    public List<Place> findByName(String searchKeyWord){
        TypedQuery<Place> query =  em.createQuery("select p from Place p where p.name like :searchKeyWord",Place.class);
        query.setParameter("searchKeyWord","%" + searchKeyWord + "%");
        return query.getResultList();
    }


}
