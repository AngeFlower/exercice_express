const coursDAO =  require('../dao/cours')
class CoursService{
	createCours(coursDTO){
		const {nom} = coursDTO
		return coursDAO.createCours(nom)
	};
	updateCours(id, coursDTO){
		return coursDAO.updateCours(id, coursDTO)
	};
	deleteCours(id){
		return coursDAO.deleteCours(id)
	};
	retrieveCours(id){
		return coursDAO.retrieveCours(id)
	};
	retrieveAllCours(){
		return coursDAO.retrieveAllCours()
	};


}

module.exports = new CoursService()
