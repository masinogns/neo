package repository;

import model.Food;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by adaeng on 2017. 12. 12..
 */
@Repository
public class FoodRepository {

    @PersistenceContext
    EntityManager em;

    public void save(Food food){
        em.persist(food);
    }

    public Food findOne(Integer id) {
        return em.find(Food.class,id);
    }

    public List<Food> findAll(){
        return em.createQuery("select f from Food f", Food.class).getResultList();
    }

    public List<Food> findBySize(int start, int setContentResult){
        return em.createQuery(
                "select f from Food f", Food.class).setFirstResult(start).setMaxResults(setContentResult).getResultList();
    }

    public List<Food> findByAddress(String searchKeyWord){
        TypedQuery<Food> query =  em.createQuery("select f from Food f where f.address like :searchKeyWord",Food.class);
        query.setParameter("searchKeyWord","%" + searchKeyWord + "%");
        return query.getResultList();
    }

    public List<Food> findByName(String searchKeyWord){
        TypedQuery<Food> query =  em.createQuery("select f from Food f where f.name like :searchKeyWord", Food.class);
        query.setParameter("searchKeyWord","%" + searchKeyWord + "%");
        return query.getResultList();
    }

}
