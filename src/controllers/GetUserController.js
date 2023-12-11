export class GetUserController {
constructor(getUserRepository) {
    this.getUserRepository = getUserRepository
}
    async handle(){
        try {
            const users = await this.getUserRepository.getUsers()

            return {
                statusCode: 200,
                body: users
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Something went wrong'
            }
        }

    }
}