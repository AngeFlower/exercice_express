const coursService = require('../service/cours');
class CoursController{
	async createCours(req, res){
		try{
			console.log(req.body)
			const id =  await coursService.createCours(req.body);
			res.status(201).json(id);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async retrieveCours(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await coursService.retrieveCours(id);
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async retrieveAllCours(req, res){
		try{
			const obj =  await coursService.retrieveAllCours();
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async updateCours(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await coursService.updateCours(id,req.body);
			res.status(201).json(obj);
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
	async deleteCours(req, res){
		try{
			const id = parseInt(req.params.id)
			const obj =  await coursService.deleteCours(id);
			res.status(201).json("Cours deleted successfully !");
		} catch (err){
			console.log(err)
			res.status(500).json("Une erreur s'est produite");
		}
	}
}

module.exports = new CoursController()