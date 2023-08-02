const coursModel = require('../db/models/cours')

class CoursDAO{
	async createCours(nom){
		try{
			const createdCours = await coursModel.transaction(async trx=>{
				const createdCours = await coursModel.query(trx).insert({
					nom:nom,
				});
				return createdCours
			})
			return createdCours;
			console.log("Cours created successfully !")
		}catch(err){
			console.log(err);
		}	
	};

	async updateCours(id, data){
		try{
			const updatedCours = await coursModel.transaction(async trx=>{
				const updatedCours = await coursModel.query(trx).upsertGraph(id,data);
				return updatedCours;
			})
			return updatedCours
			console.log("Cours updated successfully !")
		}catch(err){
			console.log("Cours has not been updated !")
			console.log(err);
		}
	};

	async deleteCours(id){
		try{
			const deletedCours = await coursModel.transaction(async trx=>{
				const deletedCours = await coursModel.query(trx).deleteById(id);
				return deletedCours;
			})
			return deletedCours
			console.log("Cours deleted successfully !")
		}catch(err){
			console.log("Cours has not been deleted !")
			console.log(err);
		}
	};
	async retrieveCours(id){
		const retrievedCours = await coursModel.query().findById(id);
		return retrievedCours;
	};
	async retrieveAllCours(){
		const retrievedCours = await coursModel.query();
		return retrievedCours;
	};
}

module.exports = new CoursDAO();

