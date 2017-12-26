package repository;


import model.House;


import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
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

    public List<House> findBySize(int start,int setContentResult){
        return em.createQuery(
                "select h from House h", House.class).setFirstResult(start).setMaxResults(setContentResult).getResultList();
    }

    public List<House> findByAddress(String searchKeyWord){
        TypedQuery<House> query =  em.createQuery("select h from House h where h.address like :searchKeyWord",House.class);
        query.setParameter("searchKeyWord","%" + searchKeyWord + "%");
        return query.getResultList();
    }

    public List<House> findByName(String searchKeyWord){
        TypedQuery<House> query =  em.createQuery("select h from House h where h.name like :searchKeyWord",House.class);
        query.setParameter("searchKeyWord","%" + searchKeyWord + "%");
        return query.getResultList();
    }



}
